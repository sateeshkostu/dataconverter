import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templetes from './pages/Templetes';
import Home from './pages/Home';
import Mytemplete from './pages/Mytemplete';
import Fieldmap from './pages/Fieldmap';
import Mapping from './pages/Mapping';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Profilepopup from './pages/Profilepopup';
import Editprofile from './pages/Editprofile';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    {/* <Editprofile/> */}
    {/* <Mapping/> */}
    {/* <Aboutus/> */}
    <Routes>
      <Route path='/Templetes' element ={<Templetes/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/Mytempletes' element={<Mytemplete/>} />
      <Route path='/fieldmap' element={<Fieldmap/>} />
      {/* <Route path='/mapping' element={<Mapping/>} /> */}
      <Route path='/aboutus' element={<Aboutus/>} />
      <Route path='/contactus' element={<Contactus/>} />
      <Route path='/Profilepopup' element={<Profilepopup/>} />
      {/* <Route path='editprofilr' element={<Editprofile/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
