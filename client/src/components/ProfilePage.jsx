import ProfileBanner from './userProfile/ProfileBanner';
import './userProfile/ProfilePage.css'
import UserNav from './navigation/userNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../state/authSlice';

const ProfilePage = () => {
    
    const userInfo = useSelector(selectAuth)
    const profileInfo = JSON.parse(localStorage.getItem('profile'))
    

    return (
        <>
            <UserNav userInfo={userInfo} />
            <ProfileBanner profileInfo={profileInfo} />
        </>
    )
}

export default ProfilePage;