import './homepage/Homepage.css'
import HomepageHeader from "./homepage/HomepageHeader";
import TopNav from "./navigation/TopNav";
import BrowseChatRooms from "./homepage/BrowseChatrooms";
import CreateChatroom from "./homepage/CreateChatroom";
import ShareYourStyleCarousel from "./homepage/HomepageCarousel";
import Footer from './navigation/Footer';


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