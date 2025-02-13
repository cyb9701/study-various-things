import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AddButton = ({ onClick }) => {
  return (
    <AddButtonWrapper>
      <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton>
    </AddButtonWrapper>
  );
};

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

export default AddButton;
