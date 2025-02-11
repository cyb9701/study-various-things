import styled from 'styled-components';

// status
// pending > in-progress > done

const Bar = styled.div`
  height: 8px;
  width: 120px;
  border-radius: 16px;
  background: ${({ status }) => {
    switch (status) {
      case 'pending':
        return '#e3e2e7';

      case 'in-progress':
        return '#6532f1';

      case 'done':
        return '#baa9ff';
    }
  }};
`;

export default Bar;
