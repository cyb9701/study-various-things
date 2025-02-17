import SelectInput from './SelectInput.jsx';
import TextAreaInput from './TextAreaInput.jsx';
import TextInput from './TextInput.jsx';

const Body = ({ type, options }) => {
  let Component;

  switch (type) {
    case 'text':
      Component = TextInput;
      break;

    case 'textarea':
      Component = TextAreaInput;
      break;

    case 'select':
      Component = SelectInput;
      break;

    default:
      return null;
  }

  return <Component options={options} />;
};

export default Body;
