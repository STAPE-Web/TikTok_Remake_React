import React from 'react'
import { myProfile } from '../objects/MyProfile'

const Header = () => {
    return (
        <header>
            <a className='links' href="/"><h1>Tik Tok</h1></a>
            <div className="navigation">
                <a className='links' href="/upload"><ion-icon name="cloud-upload-outline"></ion-icon></a>
                <a className='links' href="/profile"><img src={myProfile.img} alt='' /></a>
            </div>
        </header>
    )
}

export default Header
