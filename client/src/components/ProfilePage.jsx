import ProfileBanner from './userProfile/ProfileBanner';
import './userProfile/ProfilePage.css'
import UserNav from './navigation/userNav';
import { useState } from 'react';

const ProfilePage = () => {


    return (
        <>
            <UserNav />
            <ProfileBanner />
        </>
    )
}

export default ProfilePage;