
import './App.css';

import {Routes , Route} from 'react-router-dom'
import Init from './Pages/Home/init.jsx';
import Login from './Pages/Login/login.jsx';
import Register from './Pages/Register/register.jsx'

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
