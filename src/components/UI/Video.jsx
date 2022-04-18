import { useState } from "react"
import DropDown from "./DropDown"

const Video = (props) => {

    const [share, setShare] = useState(false)

    return (
        <div className='video'>
            <div className='top'>
                <img src={props.post.img} alt="" />
                <div className="info">
                    <div className="ProfileInfo">
                        <p><b>{props.post.nikname}</b></p>
                        <p>{props.post.name}</p>
                    </div>
                    <div className="VideoInfo">
                        <p>{props.post.description}</p>
                        <div className="hashTags">
                            {props.post.hashTags.map((hashTags) => <span key={hashTags.toString()}>{hashTags}</span>)}
                        </div>
                    </div>
                    <p className="music"><ion-icon name="musical-notes-outline"></ion-icon>{props.post.music}</p>
                </div>
                <button>Follow</button>
            </div>
            <div className="bottom">
                <video src={props.post.video} playsInline autoPlay loop muted controls />
                <div className="stats">
                    <div className="info">
                        <ion-icon name="play"></ion-icon>
                        <p>{props.post.views}</p>
                    </div>
                    <div className="info">
                        <ion-icon name="heart"></ion-icon>
                        <p>{props.post.likes}</p>
                    </div>
                    <div className="info">
                        <ion-icon name="chatbubble"></ion-icon>
                        <p>{props.post.comments}</p>
                    </div>
                    <div className="info" onClick={() => setShare(true)}>
                        <ion-icon name="arrow-redo"></ion-icon>
                        <p>{props.post.reposts}</p>
                    </div>
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
                </div>
            </div>
        </div >
    )
}

export default Video