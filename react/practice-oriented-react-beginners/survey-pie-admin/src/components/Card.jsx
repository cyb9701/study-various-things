import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

const Card = ({
  children,
  title,
  desc,
  onUpButtonClicked,
  onDownButtonClicked,
  onDeleteButtonClicked,
  onClick,
  isSelected,
}) => {
  return (
    <CardWrapper $isSelected={isSelected} onClick={onClick}>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
      <ButtonGroupWapper>
        <ButtonGroup>
          <Button
            type='text'
            onClick={onUpButtonClicked}
            icon={<UpOutlined />}
          />
          <Button
            type='text'
            onClick={onDownButtonClicked}
            icon={<DownOutlined />}
          />
          <div style={{ height: 10 }} />
          <Button
            type='text'
            onClick={onDeleteButtonClicked}
            icon={<DeleteOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWapper>
    </CardWrapper>
  );
};

const ButtonGroupWapper = styled.div`
  position: absolute;
  left: 100%;
  top: 0px;
  display: none;
`;

const ButtonGroup = styled.div`
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  border: ${({ $isSelected }) =>
    $isSelected ? '3px solid blue' : '1px solid #dddddd'};
  width: 400px;
  margin: 30px auto;
  background: #ffffff;
  position: relative;

  &:hover ${ButtonGroupWapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 15px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  color: #666666;
  margin-left: 5px;
`;

const Body = styled.div`
  padding: 15px;
`;

export default Card;
