import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
        <h1>This is the homepage</h1>
        <Link to="/aboutus">About Us</Link>
        <Link to ="/firstchatroom">Chatroom</Link>
        </>
    )
}

export default Homepage;