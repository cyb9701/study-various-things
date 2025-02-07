import styled from 'styled-components';

const SelectInput = ({ answer = [], updateAnswer, options }) => {
  const handleChange = (e, index) => {
    const isChecked = e.target.checked;

    let newValues = [...answer];

    if (isChecked) {
      newValues.push(index);
    } else {
      newValues = newValues.filter((e) => e !== index);
    }

    updateAnswer(newValues);
  };

  return (
    <SelectItemWrapper>
      {options.items.map((item, index) => {
        return (
          <Item key={index} onChange={(e) => handleChange(e, index)}>
            {item}
          </Item>
        );
      })}
    </SelectItemWrapper>
  );
};

const SelectItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = ({ children, onChange }) => {
  return (
    <ItemWrapper>
      <label>
        <input type='checkbox' onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
