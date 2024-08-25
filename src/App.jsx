import Header from './components/layout/hearder';
import Footder from './components/layout/footder';
import './style/global.css';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footder />
    </>
  )
}

export default App
