import './App.css'
import { Route, Switch } from 'react-router-dom'
import React from 'react'

import Homepage from './components/Homepage';
import FirstChatroom from './components/chatrooms/publicRooms/FirstChatroom';
import AboutUs from './components/AboutUs';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Profile from './components/user/profile';
import BoardUser from './components/user/BoardUser';
import BoardAdmin from './components/user/BoardAdmin';
import BoardModerator from './components/user/BoardModerator';

import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "./state/authSlice"
import eventBus from './common/EventBus';


function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/aboutus">
          <AboutUs />
          </Route>
        <Route path="/firstchatroom">
          <FirstChatroom />
        </ Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/user" component={BoardUser} />
        <Route path="/mod" component={BoardModerator} />
        <Route path="/admin" component={BoardAdmin} />
      </Switch>
    </>
  )
}

export default App;
