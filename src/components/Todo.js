function Todo(props) {

 function onButtonClick (){
       console.log('Onclick');
       console.log(props.text);
 };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button onClick={() => { console.log('Hola')}} className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
