import 'package:note_app/data_layer/data_source/note_db_helper.dart';
import 'package:note_app/data_layer/repository/note_repository_impl.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';
import 'package:note_app/domain_layer/use_case/add_note_use_case.dart';
import 'package:note_app/domain_layer/use_case/delete_note_use_case.dart';
import 'package:note_app/domain_layer/use_case/get_note_use_case.dart';
import 'package:note_app/domain_layer/use_case/get_notes_use_case.dart';
import 'package:note_app/domain_layer/use_case/order_note_use_case.dart';
import 'package:note_app/domain_layer/use_case/update_note_use_case.dart';
import 'package:note_app/domain_layer/use_case/use_cases.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_view_model.dart';
import 'package:note_app/presentation_layer/notes/notes_view_model.dart';
import 'package:provider/provider.dart';
import 'package:provider/single_child_widget.dart';
import 'package:sqflite/sqflite.dart';

Future<List<SingleChildWidget>> getProviders() async {
  Database database = await openDatabase(
    'note_db',
    version: 1,
    onCreate: (db, version) async {
      await db.execute(
        'CREATE TABLE note (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, color INTEGER, timestamp INTEGER)',
      );
    },
  );

  NoteDbHelper noteDbHelper = NoteDbHelper(database: database);
  NoteRepository repository = NoteRepositoryImpl(noteDb: noteDbHelper);
  UseCases useCases = UseCases(
    addNoteUseCase: AddNoteUseCase(repository: repository),
    deleteNoteUseCase: DeleteNoteUseCase(repository: repository),
    getNoteUseCase: GetNoteUseCase(repository: repository),
    getNotesUseCase: GetNotesUseCase(
      repository: repository,
      orderNoteUseCase: OrderNoteUseCase(),
    ),
    updateNoteUseCase: UpdateNoteUseCase(repository: repository),
  );
  NotesViewModel notesViewModel = NotesViewModel(useCases: useCases);
  AddEditNoteViewModel addEditNoteViewModel = AddEditNoteViewModel(repository);

  return [
    ChangeNotifierProvider(create: (_) => notesViewModel),
    ChangeNotifierProvider(create: (_) => addEditNoteViewModel),
  ];
}
