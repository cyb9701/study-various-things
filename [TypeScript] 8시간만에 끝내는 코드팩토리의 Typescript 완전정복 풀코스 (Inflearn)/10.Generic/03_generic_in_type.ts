/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = 'aaa';
// const genericString2: GenericSimpleType = 'bbb'; // ERROR

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestdAt: Date;
}

interface ErrorState {
  error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data: ['1', '2', '3'],
};

state = {
  error: 'error',
};
