import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

const Body = ({ type, answer, updateAnswer, options }) => {
  let InputComponent;

  switch (type) {
    case 'select':
      InputComponent = SelectInput;
      break;

    case 'text':
      InputComponent = TextInput;
      break;

    case 'textarea':
      InputComponent = TextAreaInput;
      break;
  }

  return (
    <InputComponent
      answer={answer}
      updateAnswer={updateAnswer}
      options={options}
    />
  );
};

export default Body;
