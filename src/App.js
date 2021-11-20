import React from 'react';
import './assets/styles/app.scss'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";


import { auth } from "./modules/firebase";
import Login from './views/Login';
import Reset from './views/Reset';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import BottomNAvi from './components/BottomNavi';

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <BrowserRouter>
        <BottomNAvi />
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/dashboard' element={
          <PrivateRoute authorized={user}>
            <Dashboard />
          </PrivateRoute>
        } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
