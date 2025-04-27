import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing.jsx";
import Login from "./components/login.jsx";
import Profile from "./components/profile.jsx";
import Signup from "./components/signup.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </>
  )
}

export default App
