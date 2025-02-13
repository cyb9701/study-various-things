import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
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
  }

  return <Component options={options} />;
};

export default Body;
