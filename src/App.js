import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  const userLogged = localStorage.getItem('email');
  const userId = localStorage.getItem('id');

  return (
    <Router> 
     <Routes>
      <Route path='/' element={<Home />} />
      <Route 
        path='/oddaj-rzeczy' 
        element={
          userLogged !== null
          ? <Form userId={userId}/>
          : <Navigate replace to={"/logowanie"} />
        } 
      />
      <Route path='/logowanie' element={<Login />} />
      <Route path='/rejestracja' element={<Register />} />
      <Route path='/wylogowano' element={<Logout />} />
     </Routes>
    </Router>
  );
}

export default App;
