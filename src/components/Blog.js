import React from 'react'
import Blogarticles from './Blogarticles'


function Blog() {

    let search = false
 
    const searchiconclick =()=>{
        console.log("clicked")
        const element = document.getElementById("blogsearch")
        const btn = document.getElementById("searchbtn")
        search = !search
       search ? element.style.display="block":element.style.display="none"
       search ? btn.innerText="clear":btn.innerText="search"
        }


    return (
        <div className="">
            <div className="blogcontainer">
            <nav  className=" blognav rightfloat">
                <span style={{float:"left"}}>All posts</span>
                <div id="searchdiv" className="searchdivafter" >
                    <form style={{display:"none"}} id="blogsearch">
                    <input  className="blogsearchinput" ></input>
                    </form>
                    <button id="searchbtn" onClick={searchiconclick} className="blogsearchbtn material-icons">search</button>
                </div>
            </nav>
            <Blogarticles/>
            </div>
        </div>
    )
}

export default Blog
