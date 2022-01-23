import React from 'react'
import chaticon from '../icons/chaticon.png'

function Chatbutton() {
    return (
        <div>
            <a href="" style={{width:"64px"}} className="chatbutton"><img className="chaticon" src={chaticon} alt="chaticon"></img></a>
        </div>
    )
}

export default Chatbutton
