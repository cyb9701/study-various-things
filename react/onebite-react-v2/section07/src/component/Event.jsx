import { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    // clean up 함수.
    // 정리함수.
    // useEffect가 끝나면 호출.
    return () => {
      console.log('🍀Event:7🍀', 'unmount');
    };
  }, []);

  return <>짝수</>;
};

export default Even;
