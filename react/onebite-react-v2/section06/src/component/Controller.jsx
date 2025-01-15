const Controller = ({ onChange }) => {
  return (
    <>
      <button onClick={() => onChange(-100)}>-100</button>
      <button onClick={() => onChange(-10)}>-10</button>
      <button onClick={() => onChange(-1)}>-1</button>
      <button onClick={() => onChange(+1)}>+1</button>
      <button onClick={() => onChange(+10)}>+10</button>
      <button onClick={() => onChange(+100)}>+100</button>
    </>
  );
};

export default Controller;
