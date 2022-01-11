import './App.css'
import { Route, Switch } from 'react-router-dom'
import React from 'react'

import Homepage from './components/Homepage';
import FirstChatroom from './components/chatrooms/publicRooms/FirstChatroom';
import AboutUs from './components/AboutUs';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Profile from './components/user/profile';
import BoardUser from './components/user/BoardUser';
import BoardAdmin from './components/user/BoardAdmin';
import BoardModerator from './components/user/BoardModerator';




function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/aboutus" component={AboutUs} />
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
