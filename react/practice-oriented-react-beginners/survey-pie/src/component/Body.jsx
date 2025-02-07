import styled from 'styled-components';
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
    <BodyWrapper>
      <InputComponent
        answer={answer}
        updateAnswer={updateAnswer}
        options={options}
      />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin-left: 38px;
  flex: 1;
`;

export default Body;
