import './App.css'
import {Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Messages from './pages/Messages';
import PostRide from './pages/PostRide';
import Search from './pages/Search';
import YourRides from './pages/YourRides';

import Navbar from './components/Navbar';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

function App() {

  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Routes>
          <Route path= "/Login"  element={<Login/>}/>
          <Route path= "/Signup"  element={<Signup/>}/>
          <Route path= "/Search"  element={<Search/>}/>
          <Route path= "/PostRide"  element={<PostRide/>}/>
          <Route path= "/YourRides"  element={<YourRides/>}/>
          <Route path= "/Messages"  element={<Messages/>}/>
          <Route path="/" element={<Navigate replace to="/Search" />} />
        </Routes>
  </>
  )
}

export default App
