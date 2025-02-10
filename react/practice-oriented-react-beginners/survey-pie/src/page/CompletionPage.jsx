import axios from 'axios';
import styled from 'styled-components';

const CompletionPage = () => {
  axios
    .get('http://localhost:5173/')
    .then((response) => {
      console.log('🍀CompletionPage:8🍀', response.data);
    })
    .catch((error) => {
      console.log('🍀CompletionPage:11🍀', error);
    });

  return <CompletionPageWrapper>aaa</CompletionPageWrapper>;
};

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: 4em;
`;

export default CompletionPage;
