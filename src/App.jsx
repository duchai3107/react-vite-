import './components/ToDolist/ToDo.css';
import TodoDaTa from './components/ToDolist/TodoDaTa';
import TodoNew from './components/ToDolist/TodoNew';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [Todolist, Settodolist] = useState([

  ])
  const Mynewtodo = (name) => {
    const newtodo = {
      id: 3,
      name: name
    }
    Settodolist([...Todolist, newtodo])
  }
  return (
    <div className="Todo-container">
      <div className="Todo-title">ToDo-List</div>
      <TodoNew
        Mynewtodo={Mynewtodo}
      />
      {Todolist.length > 0 &&
        <TodoDaTa
          Todolist={Todolist}
        />
      }
      {Todolist.length === 0 &&
        <div className='Todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      }
    </div>
  )
}

export default App
