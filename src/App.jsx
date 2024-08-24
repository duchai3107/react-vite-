import './components/ToDolist/ToDo.css';
import TodoDaTa from './components/ToDolist/TodoDaTa';
import TodoNew from './components/ToDolist/TodoNew';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const name = 'Hai Livelful';
  const age = 20;
  const data = { address: 'HCM', GIapha: 'Nguyen' };
  const Mynewtodo = (name) => {
    alert(`Goi a ${name}`)
  }
  const [Todolist, Settodolist] = useState([
    { id: 1, name: "livelful" },
    { id: 2, name: "Mu" }
  ])
  return (
    <div className="Todo-container">
      <div className="Todo-title">ToDo-List</div>
      <TodoNew
        Mynewtodo={Mynewtodo}
      />
      <TodoDaTa
        name={name}
        age={age}
        data={data}
        Todolist={Todolist}
      />
      <div className='Todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
