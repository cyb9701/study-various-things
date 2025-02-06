const TextInput = ({ answer, updateAnswer }) => {
  const handleChange = (e) => {
    updateAnswer(e.target.value);
  };

  return <input type='text' value={answer} onChange={handleChange} />;
};

export default TextInput;
