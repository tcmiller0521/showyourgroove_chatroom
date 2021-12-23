import { Button } from 'react-bootstrap';
import Disc from '../assets/images/showyourgroove-halflogo.png';
import '../assets/style/Navbar.css';

const Navbar = () => {
    return (
    <div>
        <h1 className='Topbar text-dark h1'>HOME ABOUT <img src={Disc} className='Toplogo' alt=''/> CHAT SUPPORT</h1>
        <h1 className='loginBTN'><Button variant='dark'>LOGIN</Button></h1>
        <h1 className='registerBTN'><Button variant='dark'>REGISTER</Button></h1>
    </div>
    )
}

export default Navbar;