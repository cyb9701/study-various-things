import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams();

  return <>diary : {params.id}</>;
};

export default Diary;
