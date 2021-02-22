import React from 'react'
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice'
import './ProfileScreen.css'
import { useSelector } from "react-redux";
import { auth } from '../firebase';
import image from "../components/assets/image.png"

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className = 'profileScreen'>
            <Nav/>
            <div className = 'profile__body'>
                <h1>Edit Profile</h1>
                <div className = 'profile_info'>
                    <img
                        src ={image}
                        alt = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profilescreens__plans">
                            <button onClick = {()=>auth.signOut}  className="signout">Signout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
