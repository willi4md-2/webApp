import Navbar from    './Components/Navigation/Navbar';
// import Footer from    './Components/Footer/Footer';
import Timesheet from './Components/Timesheet/Timesheet';
import Dashboard from './Components/Dashboard/Dashboard';
import Inventory from './Components/Inventory/Inventory';
import Login from     './Components/Login/Login';
import SignUp from    './Components/Login/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <BrowserRouter>

        <Navbar/>
        
        <Routes>
          <Route path=""          element={<Dashboard/>}  />
          <Route path="timesheet" element={<Timesheet/>}  />
          <Route path="inventory" element={<Inventory/>}  />
          <Route path="login"     element={<Login/>}      />
          <Route path="signup"    element={<SignUp/>}     />
        </Routes>

        {/* <Box sx={{marginTop: 'auto'}}>
          <Footer/>
        </Box> */}

      </BrowserRouter>
    </Box>
  );
}

export default App;
