import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/Forgot';
// import User from './pages/User';
import Upload from './components/Upload';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {/* <Route path="/user" element={<User/>}/> */}
        <Route path="/Upload" element={<Upload/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;

