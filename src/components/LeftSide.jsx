import React from 'react'
import { hashTags } from '../objects/HashTags'
import { recomendetAccounts } from '../objects/RecomendetAccounts'
import HashTag from './UI/HashTag'
import Recomend from './UI/Recomend'

const LeftSide = () => {
    return (
        <div className='leftSide'>
            <h3>Suggested accounts</h3>
            <div className='accountList'>
                {recomendetAccounts.map((recomendetAccounts) => <Recomend account={recomendetAccounts} key={recomendetAccounts.id} />)}
            </div>
            <hr />
            <h3>Discover</h3>
            <div className='hashTags'>
                {hashTags.map((hashTags) => <HashTag key={hashTags.toString()} post={hashTags} />)}
            </div>
            <hr />
            <div className='footer'>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Help</a>
                <a href='/'>Privacy and policy</a>
                <a href='/'>Terms of use</a>
            </div>
        </div >
    )
}

export default LeftSide