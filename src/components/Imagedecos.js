import React from 'react'
import deskimage from '../icons/deskimage.jpg'
import Aboutus from './Aboutus'
import Courseview from './Courseview';
import Coursebenefits from './Coursebenefits';
import Testimonials from './Testimonials';
import Consulting from './Consulting';

function Imagedecos() {
    return (
        <div>
            
        <div >
            <img className="pcdeskimg" alt="computerdeskimg" src={deskimage} ></img>
            <div className="imagetext1">
            <h1 style={{fontSize:"48px"}} >A World of Knowledge at </h1>
            <h1 style={{fontSize:"48px"}}>Your Fingertips</h1>
        </div>
        </div>
       <Aboutus/>
       <div className="bgimg bgimgcontainer">
           <h1 className="bgimgh1">Welcome to</h1>
           <h1 className="bgimgh2"><i>THE NEXT BIG THING</i></h1>
           <div className="jointenbtndiv">
           <hr className="bgimghr"></hr>
        <button className="jointenbtn btn-lg">Join TEN Virtual Campus</button>
           </div>
       

       </div>
       <Courseview/>
    <Coursebenefits/>
    <Testimonials/>
    <Consulting/>
        </div>
    )
}

export default Imagedecos
