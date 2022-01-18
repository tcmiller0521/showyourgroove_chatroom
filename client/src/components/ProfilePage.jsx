import ProfileBanner from './userProfile/ProfileBanner';
import './userProfile/ProfilePage.css'
import UserNav from './navigation/userNav';

const ProfilePage = () => {
    return (
        <>
            <UserNav />
            <ProfileBanner />
        </>
    )
}

export default ProfilePage;