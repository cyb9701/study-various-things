import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import postSurvey from '../services/postSurvey';
import putSurvey from '../services/putSurvey';

const FloatingButton = () => {
  const survey = useSelector((state) => state.survey.data);

  const isEditPage = !!survey?.id;

  const navigate = useNavigate();

  const handleClick = () => {
    if (isEditPage) {
      putSurvey(survey);
    } else {
      postSurvey(survey).then((data) => {
        navigate(`/builder/${data.id}`);
      });
    }
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>저장</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 2px 2px 5px -3px #cacaca;
`;

export default FloatingButton;
