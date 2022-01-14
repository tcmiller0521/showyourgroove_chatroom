import './homepage/Homepage.css'
import React, { useState, useEffect } from 'react';
import HomepageHeader from "./homepage/HomepageHeader";
import TopNav from "./navigation/TopNav";
import BrowseChatRooms from "./homepage/BrowseChatrooms";
import CreateChatroom from "./homepage/CreateChatroom";
import ShareYourStyleCarousel from "./homepage/HomepageCarousel";
import Footer from './navigation/Footer';

import { getPublicContent } from '../api';


const Homepage = () => {
    // const [content, setContent] = useState("");

    // useEffect(() => {
    //     getPublicContent().then(
    //         (response) => {
    //             setContent(response.data);
    //         },
    //         (error) => {
    //             const _content =
    //                 (error.response && error.response.data) ||
    //                 error.message ||
    //                 error.toString();

    //             setContent(_content);
    //         }
    //     );
    // }, []);

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