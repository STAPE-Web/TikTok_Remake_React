import React, { useEffect, useRef } from 'react'

const DropDown = ({ children, share }) => {

    const dropDown = useRef()

    useEffect(() => {
        const { current: drop } = dropDown
        if (share) {
            drop.style.display = 'block'
        } else {
            drop.style.display = 'none'
        }
    })

    return (
        <div ref={dropDown}>
            {children}
        </div>
    )
}

export default DropDown