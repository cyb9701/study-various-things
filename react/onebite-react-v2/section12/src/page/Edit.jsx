import { useParams } from 'react-router-dom';

const Edit = () => {
  const params = useParams();

  return <>edit : {params.id}</>;
};

export default Edit;
