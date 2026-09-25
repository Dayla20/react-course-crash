import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
      <Todo title="Finish FrontEnd Simplified" />
      <Todo title="Land $250K job" />
      <Todo title="Enjoy life" />
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
