import React, { useState } from 'react'
import { myProfile } from '../objects/MyProfile'

const Settings = () => {

    const [nickName, setNickName] = useState(myProfile.nickname)
    const [name, setName] = useState(myProfile.name)
    const [description, setDescription] = useState(myProfile.description)

    return (
        <div className='Settings'>
            <div className="box">
                <h1>Settings</h1>
                <div className='setting'>
                    <p>Delete account</p>
                    <p className='delete'>Delete</p>
                </div>
                <hr />
                <div className='setting'>
                    <p>Notifications</p>
                    <input type="checkbox" />
                </div>
                <hr />
                <div className='private'>
                    <p>Nikname</p>
                    <input value={nickName} onChange={(e) => setNickName(e.target.value)} type="text" />
                </div>
                <div className='private'>
                    <p>Name</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                </div>
                <div className='private'>
                    <p>Description</p>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
                </div>
            </div>
        </div>
    )
}

export default Settings