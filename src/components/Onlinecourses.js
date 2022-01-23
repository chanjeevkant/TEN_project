import React,{useState,useEffect} from 'react'
import Sortingbtn from './Sortingbtn'
import axios from 'axios'
import Pagination from './Pagination'
import Slider from './Slider'
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'
import Coursepayment from './Coursepayment'


function Onlinecourses() {

    const[posts,setposts]=useState([])
    const[currentpage,setcurrentpage]=useState(1)
    const[postsperpage]=useState(12)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=> setposts(res.data.slice(0,100)) )
        .catch(err=> console.log(err))

    }, [])

 
 
    const indexOfLastPost = currentpage*postsperpage
    const indexOfFirstPost = indexOfLastPost - postsperpage
    const currentposts = posts.slice(indexOfFirstPost,indexOfLastPost)
    const paginate =(pageNumber)=>{
     setcurrentpage(pageNumber)
    }

    const handleclick=(e)=>{
        e.preventDefault()
    
    }

    return (
        <div>
        <div className="onlinecoursediv">
          
           <div className="filterdiv">
                <div style={{marginLeft:"5%",marginRight:"5%"}}>
                <h3 style={{color:"white",marginTop:"2%",fontFamily:"sans-serif"}}>Filter By</h3>
                <hr style={{color:"whitesmoke"}}></hr>
                 <p style={{color:"white",textAlign:"left",paddingTop:"2%",fontFamily:"sans-serif"}}>Price
                 <span style={{fontFamily:"sans-serif",float:"right",fontSize:"inherit"}}>-</span></p>
                 <Slider/>
                </div>
            </div>
            <div className="coursecontentdiv">
                <Sortingbtn/>
                
               <Router>
                <div className="container mt-5">
                <ul className="list-group mb-4 ">    
                <div className="  row"> 
                {currentposts.map(posts=><div className="wholecourselink col-4">
                    <li style={{border:"none",padding:"0px"}} key={posts.id} className="list-group-item">
                    <NavLink  onClick={handleclick} id={posts.title} to="/coursepayment" className="courselink" >
                    <div className="Courselinkdiv">
                    <img className="courseimg" src={posts.url} alt="courseimg"></img>
                    <button style={{display:"none"}} aria-hidden="true" ></button>
                    <h5 className="coursename">{posts.title}</h5>
                    <p className="courseprice" style={{color:"rgb(75, 209, 160)"}}>Price</p>
                    
                    </div>
                    </NavLink>
                </li></div>)}
                </div> 
                </ul>
                </div>
                <Switch>
                    <Route path="/coursepayment" component={Coursepayment} />
                </Switch>
                </Router>

                <Pagination postsperpage={postsperpage} totalposts={posts.length} paginate={paginate} />
                <button className="loadmorebtn">Load More</button>
            </div>
           
        </div>
  
    </div>
    )
}

export default Onlinecourses
