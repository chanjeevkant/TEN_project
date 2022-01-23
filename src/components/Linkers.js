import React from 'react'
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'
import Dropdown from './Dropdown'
import Onlinecourses from './Onlinecourses'
import Hiring from './Hiring'
import Blog from './Blog'


function Linkers(props) {
    
const homelink =()=>{
    props.pagesetter(true)
}

const otherlink=()=>{
    props.pagesetter(false)
}
    
    
    return (
        
        <Router>
        <nav>
        <div className="Linkers" style={{marginRight: "10%"}}>
            <div className="linkdiv"><NavLink onClick={homelink} className="HomeLink" to="/">Home</NavLink></div>
            <div  className="linkdiv"><NavLink onClick={otherlink}   className="HomeLink" to="/onlinecourses">Online Courses</NavLink></div>
            <div className="linkdiv"><NavLink  onClick={otherlink}  className="HomeLink" to="/hiring">We're Hiring </NavLink></div>
            <Dropdown pagesetter={props.pagesetter}/>
        </div>
        </nav>

        <Switch>
            <Route path="/onlinecourses" component={Onlinecourses}/>
            <Route path="/hiring" component={Hiring}/>
            <Route path="/Blog" component={Blog}/>
        </Switch>
        

         </Router> 

        
        
    )
}

export default Linkers

