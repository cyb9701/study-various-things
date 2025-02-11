import styled from 'styled-components';

const SelectInput = ({ answer = [], updateAnswer, options }) => {
  const handleChange = (e, index) => {
    if ((options.max || 1) <= answer.length) {
      return;
    }

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
          <Item
            key={index}
            checked={answer.includes(index)}
            onChange={(e) => handleChange(e, index)}
          >
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

const Item = ({ children, checked, onChange }) => {
  return (
    <ItemWrapper>
      <label>
        <input type='checkbox' checked={checked} onChange={onChange} />
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
