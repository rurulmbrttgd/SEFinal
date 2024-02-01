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
import Topbar from './topbar';
import Sidebar from './sidebar';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        
        {/* <Route path="/" element={<Topbar/>}>
          <Route path="/" element={<Sidebar/>}/>
          <Route path="/" element={<Home/>}/>
        </Route> */}
        <Route path='/' element={<><Topbar/><Sidebar/><Home/></>}/>

        <Route path="/sidebar" element={<Sidebar/>}/>
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