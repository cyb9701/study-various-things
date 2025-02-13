import { Radio, Space } from 'antd';

const SelectInput = ({ options }) => {
  return (
    <Space direction='vertical'>
      {options.items.map((e, index) => (
        <Radio key={index}>{e}</Radio>
      ))}
    </Space>
  );
};

export default SelectInput;
