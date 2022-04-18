import React, { useState } from 'react'
import DropDown from '../components/UI/DropDown'
import VideosProfile from '../components/UI/VideosProfile'
import { myProfile } from '../objects/MyProfile'

const Profile = () => {

    const [share, setShare] = useState(false)


    return (
        <div className='profile'>
            <div className="top">
                <img src={myProfile.img} alt="" />
                <div className="name">
                    <h2>{myProfile.nickname}</h2>
                    <p>{myProfile.nickname}</p>
                </div>
                <div className="share">
                    <ion-icon
                        name="arrow-redo-outline"
                        onClick={() => setShare(true)}
                    ></ion-icon>
                    <DropDown share={share} setShare={setShare}>
                        <div className='DropDown'>
                            <ion-icon onClick={() => setShare(false)} name="close-outline"></ion-icon>
                            <div onClick={() => setShare(false)}>
                                <ion-icon name="logo-whatsapp"></ion-icon>
                                <p>Share to WhatsApp</p>
                            </div>
                            <div onClick={() => setShare(false)}>
                                <ion-icon name="link-outline"></ion-icon>
                                <p>Copy link</p>
                            </div>
                            <div onClick={() => setShare(false)}>
                                <ion-icon name="logo-facebook"></ion-icon>
                                <p>Share to WhatsApp</p>
                            </div>
                            <div onClick={() => setShare(false)}>
                                <ion-icon name="mail-outline"></ion-icon>
                                <p>Share to Email</p>
                            </div>
                        </div>
                    </DropDown>
                    <a className='links' href="/settings"><ion-icon name="settings-outline"></ion-icon></a>
                </div>
            </div>
            <div className="bottom">
                <div className="stats">
                    <p><span>{myProfile.following}</span> Following</p>
                    <p><span>{myProfile.followers}</span> Followers</p>
                    <p><span>{myProfile.likes}</span> Likes</p>
                </div>
                <div className="bio">
                    <p>{myProfile.description}</p>
                </div>
            </div>
            <hr />
            <div className="VideoProfile">
                {myProfile.videos.map((myProfile) =>
                    <VideosProfile post={myProfile} key={myProfile.id} />
                )}
            </div>
        </div >
    )
}

export default Profile