import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Content from './components/Content/Content';


const App = () => {
  return (
    <div className = "app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Content />
    </div>
  )
}

export default App;
