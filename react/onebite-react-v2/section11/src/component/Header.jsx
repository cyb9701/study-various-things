import { memo } from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h3>📅 오늘은</h3>
      <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  );
};

export default memo(Header);
