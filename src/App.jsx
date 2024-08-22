import './components/ToDolist/ToDo.css';
import TodoDaTa from './components/ToDolist/TodoDaTa';
import TodoNew from './components/ToDolist/TodoNew';
import ReactLogo from './assets/react.svg';

const App = () => {
  const name = 'Hai Livelful';
  const age = 20;
  const data = { address: 'HCM', GIapha: 'Nguyen' };
  return (
    <div className="Todo-container">
      <div className="Todo-title">ToDo-List</div>
      <TodoNew />
      <TodoDaTa
        name={name}
        age={age}
        data={data}
      />
      <div className='Todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
