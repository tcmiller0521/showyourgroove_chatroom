import './App.css'

import { Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import Homepage from './components/Homepage';
import FirstChatroom from './components/chatrooms/publicRooms/FirstChatroom';
import AboutUs from './components/AboutUs';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';



function App() {
  return (
    <>
      <Switch>
        <Route path exact="/#">
          <Homepage />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/firstchatroom">
          <FirstChatroom />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </>
  )
}

export default App;
