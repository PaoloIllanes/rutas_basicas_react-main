import './App.css';

import {Routes , Route} from 'react-router-dom'
import Init from './pages/Home/init.jsx';
import Login from './pages/Login/login.jsx';
import Register from './pages/Register/register.jsx'

function App() {
  return (
    <div classname='App'>
      <Routes>
        <Route path='/' element={<Init/>} />
        <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
