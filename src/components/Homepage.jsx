import { Link } from "react-router-dom";
import '../assets/style/homepage.css'

const Homepage = () => {
    return (
        <body>
            <h1>This is the homepage</h1>
            <p>How abou this</p>
            <Link to="/aboutus">About Us</Link>
            <Link to="/firstchatroom">Chatroom</Link>
        </body>
    )
}

export default Homepage;