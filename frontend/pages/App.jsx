import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} 
    from 'react-router-dom';

import Login from './login';
import Home from './home';
import Register from './register';
import Support from './support';
import FeedbackPage from './feedback';
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
        <Route path='/backup' element={<Restore/>}/>
        <Route path='/product' element={<ProductPage/>}/>



        {/* <Route path="/create-form" element={<Form />}/>

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/" element={<TopbarEmployee />}>
          <Route path="/employee" element={<Employee />} />
        </Route>

        <Route path="/EmployeeDetails/:id" element={<EmployeeDetails />} />
        <Route path="/EmployeeEdit" element={<EmployeeEdit />} />

        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;