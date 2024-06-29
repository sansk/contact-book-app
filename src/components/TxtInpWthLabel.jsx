const TxtInpWthLabel = ({ id, value, onClickHandler }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{id}: </label>
      <input
        type="text"
        name={{ id }}
        id={{ id }}
        value={value}
        onChange={(e) => onClickHandler(e.target.value)}
      />
    </div>
  );
};

export default TxtInpWthLabel;
