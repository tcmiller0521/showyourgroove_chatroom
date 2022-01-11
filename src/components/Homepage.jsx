import './homepage/Homepage.css'
import React, { useState, useEffect } from 'react';
import HomepageHeader from "./homepage/HomepageHeader";
import TopNav from "./navigation/TopNav";
import BrowseChatRooms from "./homepage/BrowseChatrooms";
import CreateChatroom from "./homepage/CreateChatroom";
import ShareYourStyleCarousel from "./homepage/HomepageCarousel";
import Footer from './navigation/Footer';

import UserService from '../services/user.service';


const Homepage = () => {


    return (
        <>
            <TopNav />
            <HomepageHeader />
            <BrowseChatRooms />
            <CreateChatroom />
            <ShareYourStyleCarousel />
            <Footer />
        </>
    )
}

export default Homepage;