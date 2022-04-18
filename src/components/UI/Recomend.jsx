import React from 'react'

const Recomend = (props) => {
    return (
        <div className='account'>
            <img src={props.account.img} alt='' />
            <div className='accountInfo'>
                <p>{props.account.nickname}</p>
                <p>{props.account.name}</p>
            </div>
        </div>
    )
}

export default Recomend