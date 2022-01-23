import React from 'react'
import fb from '../icons/fbicon.png'
import tw from '../icons/twittericon.png'
import insta from '../icons/intsaicon.png'

function Socialmedia() {
    return (
        <div className="footerin">
        <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"><img className="Sicon" alt="fbicon" src={fb}></img></a>
        <a href="https://twitter.com/We_Are_TEN?s=08"><img className="Sicon" alt="twittericon"  src={tw}></img></a>
        <a href="https://www.instagram.com/theentrepreneurshipnetwork/"><img className="Sicon" alt="instaicon" src={insta}></img></a>
        </div>
    )
}

export default Socialmedia
