const Button = ({ text, color, children }) => {
  const handleClickButton = (e) => {
    console.log('🍀Button:3🍀', e);
  };

  return (
    <button onClick={handleClickButton} style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
