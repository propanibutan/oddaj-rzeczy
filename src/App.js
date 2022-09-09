import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <Router> 
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/oddaj-rzeczy' element={<Form />} />
      <Route path='/logowanie' element={<Login />} />
      <Route path='/rejestracja' element={<Register />} />
      <Route path='/wylogowano' element={<Logout />} />
     </Routes>
    </Router>
  );
}

export default App;
