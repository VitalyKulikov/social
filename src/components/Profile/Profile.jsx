import React from 'react';
import prof from './Profile.module.css';

const Profile = () => {
    return <div className={prof.profile}>

        <div className={prof.avatar}>
            <img src='https://cdn-icons-png.flaticon.com/512/8663/8663629.png' />
        </div>
        <div className={prof.firstName}>
            Vitaliy
        </div>
        <div className={prof.lastName}>
            Kulikov
        </div>
    </div>
}

export default Profile;