import React, { useEffect, useRef } from 'react'

const VideosProfile = (props) => {

    const video = useRef()

    useEffect(() => {
        const { current: vid } = video
        vid.onclick = function () {
            vid.play()
        }
    })

    return (
        <div>
            <video ref={video} src={props.post.video} playsInline />
            <p><ion-icon name="play-outline"></ion-icon>{props.post.views}</p>
            <p>{props.post.title}</p>
        </div>
    )
}

export default VideosProfile