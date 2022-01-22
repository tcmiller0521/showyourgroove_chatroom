import React from 'react'

import { Navbar } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import RoomsInfo from '../../assets/contentFiles/Rooms';

import HalfLogo from '../../assets/images/showyourgroove-halflogo.png'

import Pubchat from '../../assets/images/opinions.png'
import Pchat from '../../assets/images/private-chat.png'
import Friends from '../../assets/images/friends.png'
import Online  from '../../assets/images/online.png'

function ChatNav({setRooms, setPriv, setOnline, setSocial}) {
    const {index} = useParams();
    console.log(RoomsInfo)
    return (
        <div className={`${RoomsInfo[index].link}chatNav`}>
            <Navbar.Brand href="/"><img src={HalfLogo} className="chatNavLogo" alt=""/></Navbar.Brand>
            <button className="navBtn"
                onClick= {() => {
                    
                    setRooms(true);
                }}>
                    <img src={Pubchat} alt=""></img>
                    <p>Public</p>
            </button>
            <button className="navBtn" 
                onClick= {() => {
                    
                    setPriv(true);
                }}>
                    <img src={Pchat} alt=""></img>
                    <p>Private</p>
            </button>
            <button className="navBtn" 
                onClick= {() => {
                    
                    setSocial(true);
                }}>
                    <img src={Friends} alt=""></img>
                    <p>Friends</p>
            </button>
            <button className="navBtn" 
                onClick= {() => {
                    
                    setOnline(true);
                }}>
                    <img src={Online} alt=""></img>
                    <p>Online</p>
            </button>

        </div>
    )
}

export default ChatNav
