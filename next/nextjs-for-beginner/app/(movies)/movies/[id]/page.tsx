export default function MovieDetail(props: any) {
  const id = props.params.id;
  const searchParams = props.searchParams;
  console.log(searchParams);
  return <h1>Movie {id}</h1>;
}
