import './App.css'
import { Route, Switch } from 'react-router-dom'

import Homepage from './components/Homepage';
import FirstChatroom from './components/chatrooms/publicRooms/FirstChatroom';
import AboutUs from './components/AboutUs';
import LoginPage from './components/LoginPage';
import Support from './components/Supportpage';
import RegisterPage from './components/RegisterPage';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { retrieveMessageList } from './actions/messages';
import ProfilePage from './components/ProfilePage';
import LoadingPage from './components/userProfile/loadingPage';
import LogoutLoadingPage from './components/userProfile/logoutLoadingPage ';

function App() {
  const [ currentId, setCurrentId ] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveMessageList())
  }, [currentId, dispatch])

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/FirstChatroom/:index" exact>
          <FirstChatroom setCurrentId={setCurrentId} currentId={currentId} />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path ="/profile">
          <ProfilePage />
        </Route>
        <Route path ="/loading">
            <LoadingPage />
        </Route>
        <Route path="/logout/loading">
          <LogoutLoadingPage />
        </Route>
      </Switch>
    </>
  )
}

export default App;
