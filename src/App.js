import { Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage';
import FirstChatroom from './components/chatrooms/publicRooms/FirstChatroom';
import AboutUs from './components/AboutUs';
import LoginPage from './components/Login';
import './App.css'

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
      </Switch>
    </>
  )
}

export default App;
