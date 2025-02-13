import { Input } from 'antd';

const TextAreaInput = ({ options }) => {
  return (
    <>
      <Input.TextArea
        placeholder={options.placeholder}
        maxLength={options.max}
      />
    </>
  );
};

export default TextAreaInput;
