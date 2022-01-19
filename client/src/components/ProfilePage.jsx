import ProfileBanner from './userProfile/ProfileBanner';
import './userProfile/ProfilePage.css'
import UserNav from './navigation/userNav';
import { useState } from 'react';

const ProfilePage = () => {

    const [currentId, setCurrentId] = useState(0);

    return (
        <>
            <UserNav />
            <ProfileBanner currentId={currentId} setCurrentId={setCurrentId} />
        </>
    )
}

export default ProfilePage;