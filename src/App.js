
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body'
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Body />
      <Outlet />

    </div>
  );
}

export default App;
