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
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Home from './home';
import Register from '../register';
import HelpCenter from '../components/helpcenter';
import Support from './support';
import FeedbackPage from './feedback';
import CustomerPage from './customer';
import Restore from './databackup';
import ProductPage from './product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Support />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/messageus' element={<FeedbackPage/>}/>
        <Route path='/customers' element={<CustomerPage/>}/>
        <Route path='/databackup' element={<Restore />}/>
        <Route path='/product' element={<ProductPage />}/>
        {/* <Route path='/transactions/${customer_id}' element={<Transaction/>}/> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;