function Todo(props) {
  function onButtonClick() {
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button onClick={onButtonClick} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
