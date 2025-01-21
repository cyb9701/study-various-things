import Button from '../component/Button';
import DiaryList from '../component/DiaryList';
import Header from '../component/Header';

const Home = () => {
  return (
    <>
      <Header
        title='2025년 01월'
        leftChild={<Button text='<' onClick={() => {}} />}
        rightChild={<Button text='>' onClick={() => {}} />}
      />
      <DiaryList />
    </>
  );
};

export default Home;
