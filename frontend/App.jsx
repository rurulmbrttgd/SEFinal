import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} 
    from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Employee from './Employee';
// import Home from './Home';
// import TopbarEmployee from './TopbarEmployee';
// import EmployeeDetails from './EmployeeDetails';
// import EmployeeEdit from './EmployeeEdit';
// import Form from './components/Form';
import Login from './login';
import Register from './register';
import HelpCenter from './components/helpcenter';
import Feedback from './components/feedback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register/>} />

        <Route path="/helpcenter" element={<HelpCenter/>} />
 
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;