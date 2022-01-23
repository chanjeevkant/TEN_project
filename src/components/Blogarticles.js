import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Pagination from './Pagination'
import heart from '../icons/hearticon.png'
import comment from '../icons/commenticon.png'
import eye from '../icons/eyeicon.png'
import shield from '../icons/shieldicon.png'
import share from '../icons/sharetoggle.png'

function Blogarticles() {

    const[posts,setposts]=useState([])
    const[currentpage,setcurrentpage]=useState(1)
    const[blogsperpage]=useState(8)
    const[viewcount,setviewcount]=useState(0)
    const[chatcount,setchatcount]=useState(0)
    const[likecount,setlikecount]=useState(0)
    var like = false

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=> setposts(res.data.slice(0,100)) )
        .catch(err=> console.log(err))

    }, [])

    const indexOfLastPost = currentpage*blogsperpage
    const indexOfFirstPost = indexOfLastPost - blogsperpage
    const currentblogs = posts.slice(indexOfFirstPost,indexOfLastPost)
    const paginate =(pageNumber)=>{
     setcurrentpage(pageNumber)
    }

    const likecounter=()=>{
     like=!like
        console.log(like)
        setlikecount((prevlikecount)=>prevlikecount+1)
        like?document.getElementById("likeimg").style.backgroundColor="red":document.getElementById("likeimg").style.backgroundColor="transparent"

    }

    return (
        <div className="blogpostdiv">
            <div className="container">
            <div className="row ">  
                {currentblogs.map(blogs=>
                     <div className="blogpost mb-5 ">
                     <img  alt="blogpicture" src={blogs.url} className="blogpicture"></img>
                     <div className="blogprofile rightfloat" >
                         <div>
                         <img alt="profilepicture" src="https://lh4.googleusercontent.com/-Hd3jUCmlfUg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckHQrLss4lhU41fkS7ku8Y-LrZ8hw/s96-c/photo.jpg" style={{borderRadius:"50%",width:"32px",height:"32px",marginTop:"5px"}}></img>
                         </div>
                         <div>
                             <a style={{color:"black"}} className="blogprofiletext"  href="https://www.entrepreneurshipnetwork.net/post/take-action-is-a-way-to-success">malavika r
                             <span><img style={{width:"19px",height:"19px"}} src={shield}></img></span></a>
                             <ul className="rightfloat profilename blogprofiletext">
                                 <li>Nov 28, 2020</li>
                                 <li style={{marginLeft:"5px"}}>.</li>
                                 <li style={{marginLeft:"5px"}}>0 min</li>
                             </ul>
                         </div>
                        <div>
                        <img className="dropdown-toggle" type="button" style={{width:"19px",height:"19px"}}  src={share} id="sharepost" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></img>
                        <div style={{backgroundColor:"black"}} className="dropdown-menu">
                        <a style={{backgroundColor:"black",textDecoration:"none",color:"white",padding:"0px 4px"}} className="dropdown-item" href="#">
                        <span style={{marginRight:"15px",width:"19px",height:"19px"}} class="material-icons">share</span>Share Post</a>
                        </div>
                        </div>
                     </div>
                     <div className="blogtitle">
                         <a className="blogtitlelink" href="https://www.entrepreneurshipnetwork.net/post/take-action-is-a-way-to-success">
                         <h2 >{blogs.title}"</h2>
                         </a>
                     </div>
                     <div className="dashboard">
                         <hr style={{height:"1px",width:"80%",margin:" 16px auto"}}></hr>
                         <nav style={{width:"80%",margin:"16px auto"}} className="rightfloat">
                             <div className="rightfloat">
                             <a onClick={()=>setviewcount((prevview)=>prevview+1)}><img style={{width:"19px",height:"19px"}} alt="hearticon" src={eye}></img></a>
                             <span style={{marginLeft:"5px"}}>{viewcount}</span>
                             <a onClick={()=>setchatcount((prevchatcount)=>prevchatcount+1)} style={{marginLeft:"15px"}}><img style={{width:"19px",height:"19px"}} alt="hearticon" src={comment}></img></a>
                             <span style={{marginLeft:"5px"}}>{chatcount}</span>
                             <a onClick={likecounter} style={{marginLeft:"100px"}} ><img id="likeimg" style={{width:"19px",height:"19px"}} alt="hearticon" src={heart}></img></a>
                             <span style={{marginLeft:"5px"}}>{likecount}</span>
                             </div>
                         </nav>
                     </div>
                     </div>
                     )}
            </div>
            </div>
            <Pagination postsperpage={blogsperpage} totalposts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Blogarticles
