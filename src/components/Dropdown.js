import React from 'react'
import {NavLink} from 'react-router-dom'

function Dropdown(props) {

  const Links =["Blog","Certification","Alumni Team","Forum","Hackathon","Membership Registration","Campus Ambassador Program","Mentorship","SocialMedia","Testimonials","Contact Us","Complaints"]

  const otherlink=()=>{
    props.pagesetter(false)
    
  }

    return (
        <div >
          <div className="linkdiv dropdown" style={{border:"0"}}>
              <a style={{marginLeft:"92%"}} id="dropdownMenuButton" data-hover="dropdown" diasbled="true" data-toggle="dropdown"  href="#" className="HomeLink dropdown-toggle">More</a> 
              
               <ul  className="dropdown-menu uldropdown " aria-labelledby="dropdownMenuButton1">

                 {
                   
                   Links.map((Name)=> <div className="dropdown-item dropitem" style={{textAlign:"center"}}>
                   <li style={{height:"auto"}} className="lidropdown"><NavLink onClick={otherlink} to={"/"+Name.replace(/\s/g,"")} className="Morehyperlink"  href="#">{Name}</NavLink></li>
                   <hr className="abouthr" style={{width:"100%"}}></hr>
                   </div>)
                 }

                 <div className="dropdown-item dropitem" style={{textAlign:"center"}}>
                 <li><a  className="Morehyperlink"  href="/#footer">SocialMedia</a></li>
                 <hr className="abouthr" style={{width:"100%"}}></hr>
                 </div>

               </ul>
               
              </div>  
        </div>
    )
}

export default Dropdown

