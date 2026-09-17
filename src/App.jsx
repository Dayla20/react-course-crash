import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';

function App() {
  return (
    <div>
       <Title />
       <Todo text="Finish Frontend Simplified" />
       <Todo text="Finish the interview section" />
       <Todo text="Land $120K job" />
    </div>
  );
}

export default App;
