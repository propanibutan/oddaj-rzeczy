import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  const [signedInUser, setSignedInUser] = useState(null);

  useEffect(() => {
    const user = onAuthStateChanged(auth, (currentUser) => {
      setSignedInUser(currentUser);
    });

    return user
  }, [])

  return (
    <Router> 
     <Routes>
      <Route path='/' element={<Home />} />
      <Route 
        path='/oddaj-rzeczy' 
        element={
          signedInUser 
          ? <Form signedInUser={signedInUser} />
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
