import './Todo.css';

function Todo (props) {
  function deleteTodo () {
    console.log('deleteTodo()')
  }
 
  return (
    <div className='todo'>
      <h2>{props.title}</h2>
      <button onClick={deleteTodo}>Delete</button>
    </div> )

}

export default Todo;