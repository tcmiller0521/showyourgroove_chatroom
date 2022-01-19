import './App.css'
import { Route, Switch } from 'react-router-dom'

import Homepage from './components/Homepage';
import FirstChatroom from './components/chatrooms/publicRooms/FirstChatroom';
import AboutUs from './components/AboutUs';
import LoginPage from './components/LoginPage';
import Support from './components/Supportpage';
import RegisterPage from './components/RegisterPage';

function App() {
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
          <FirstChatroom />
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
      </Switch>
    </>
  )
}

export default App;
