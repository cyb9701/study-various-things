import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

const AddButton = ({ addQuestion }) => {
  const [open, setOpen] = useState(false);

  const handleClicked = (type) => {
    setOpen(false);
    addQuestion(type);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <Button
              type='text'
              style={{ display: 'block' }}
              onClick={() => handleClicked('select')}
            >
              객관식
            </Button>
            <Button
              type='text'
              style={{ display: 'block' }}
              onClick={() => handleClicked('text')}
            >
              단답식
            </Button>
            <Button
              type='text'
              style={{ display: 'block' }}
              onClick={() => handleClicked('textarea')}
            >
              서술식
            </Button>
          </div>
        }
        placement='right'
        trigger='click'
        open={open}
        onOpenChange={handleOpenChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
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
