import { Link } from 'react-router';

const PageA = () => {
  return (
    <div>
      <div>page a</div>
      <Link to='/2'>to page b</Link>
    </div>
  );
};

export default PageA;
