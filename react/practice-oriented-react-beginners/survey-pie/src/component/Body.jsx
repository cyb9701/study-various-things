import TextInput from './TextInput';

const Body = ({ type, answer, updateAnswer }) => {
  let InputComponent;

  switch (type) {
    case 'select':
      InputComponent = <></>;

    case 'text':
      InputComponent = TextInput;

    case 'textarea':
  }

  return <InputComponent answer={answer} updateAnswer={updateAnswer} />;
};

export default Body;
