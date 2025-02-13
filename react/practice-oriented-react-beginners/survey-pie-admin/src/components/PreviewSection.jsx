import AddButton from './AddButton';
import Body from './Boyd';
import Card from './Card';

const PreviewSection = ({
  questions,
  onAddButtonClicked,
  onUpButtonClicked,
  onDownButtonClicked,
  onDeleteButtonClicked,
}) => {
  return (
    <>
      {questions.map((e, index) => (
        <Card
          key={index}
          title={e.title}
          desc={e.desc}
          onUpButtonClicked={() => onUpButtonClicked(index)}
          onDownButtonClicked={() => onDownButtonClicked(index)}
          onDeleteButtonClicked={() => onDeleteButtonClicked(index)}
        >
          <Body type={e.type} options={e.options} />
        </Card>
      ))}
      <AddButton addQuestion={onAddButtonClicked} />
    </>
  );
};

export default PreviewSection;
