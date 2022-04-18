import React, { useEffect, useRef, useState } from 'react'

const Upload = () => {

    const [input, setInput] = useState('')
    const [textarea, setTextarea] = useState('')
    const button = useRef()

    useEffect(() => {
        const { current: but } = button
        if (input === '') {
            but.disabled = true
        } else {
            but.disabled = false
        }
        if (textarea === '') {
            but.disabled = true
        }
        but.onclick = function () {
            window.location = '/'
        }
    })

    return (
        <div className='upload'>
            <div className="box">
                <div className="top">
                    <h1>Upload video</h1>
                    <p>Post a video to your account</p>
                </div>
                <div className="bottom">
                    <div className="left">
                        <input type="file" id='upload' />
                        <ion-icon name="cloud-upload"></ion-icon>
                        <p>Select video to upload</p>
                        <label className='button' htmlFor="upload">Select file</label>
                    </div>
                    <div className="right">
                        <div className="div">
                            <label>Caption</label>
                            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        </div>
                        <div className="div">
                            <label>Description</label>
                            <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
                        </div>
                        <div className="div">
                            <label>Who can view this video</label>
                            <select>
                                <option>Public</option>
                                <option>Friends</option>
                                <option>Private</option>
                            </select>
                        </div>
                        <div className="div">
                            <label>Allow users to:</label>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <span>Comment</span>
                                <input type="checkbox" />
                                <span>Duet</span>
                                <input type="checkbox" />
                                <span>Stitch</span>
                            </div>
                        </div>
                        <div className="div">
                            <div className="checkbox">
                                <label>Run a copyright check</label>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="btns">
                            <a className='links' href="/"><button>Cancel</button></a>
                            <button ref={button} disabled={true}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Upload