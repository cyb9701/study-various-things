import styled from 'styled-components';

const TextAreaInput = ({ answer, updateAnswer, options }) => {
  const handleChange = (e) => {
    updateAnswer(e.target.value);
  };

  return (
    <Input
      type='text'
      value={answer}
      onChange={handleChange}
      placeholder={options.placeholder}
    />
  );
};

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
  width: 100%;
`;

export default TextAreaInput;
