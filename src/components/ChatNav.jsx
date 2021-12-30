import React from 'react'

import Pubchat from '../assets/images/opinions.png'
import Pchat from '../assets/images/private-chat.png'
import Friends from '../assets/images/friends.png'
import Online  from '../assets/images/online.png'

function ChatNav({setRooms, setPriv, setOnline, setSocial}) {
    return (
        <div>
            <button className="navBtn"
                onClick= {() => {
                    
                    setRooms(true);
                }}>
                    <img src={Pubchat} alt=""></img>
            </button>
            <button className="navBtn" 
                onClick= {() => {
                    
                    setPriv(true);
                }}>
                    <img src={Pchat} alt=""></img>
            </button>
            <button className="navBtn" 
                onClick= {() => {
                    
                    setSocial(true);
                }}>
                    <img src={Friends} alt=""></img>
            </button>
            <button className="navBtn" 
                onClick= {() => {
                    
                    setOnline(true);
                }}>
                    <img src={Online} alt=""></img>
            </button>

        </div>
    )
}

export default ChatNav
