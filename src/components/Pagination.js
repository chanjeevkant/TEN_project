import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Pagination({postsperpage,totalposts,paginate}) {

    const pageNumbers =[]

    const [crntpgnum,setcrntpgnum]=useState(1)



    for(let i=1;i<=Math.ceil(totalposts/postsperpage);i++){
pageNumbers.push(i)
    }

    const previousClick = (e)=>{
        e.preventDefault()
        crntpgnum>=2 && setcrntpgnum((prev)=>prev-1) 
        if(crntpgnum===1){document.getElementById("prevbtn").style.pointerEvents="none"}
  paginate(crntpgnum)
  console.log(crntpgnum)
    }

    const nextClick = (e)=>{
        e.preventDefault()
       crntpgnum<=12 && setcrntpgnum((prev)=>prev+1)
       if(crntpgnum===13){document.getElementById("prevbtn").style.pointerEvents="none"}
        paginate(crntpgnum)
        console.log(crntpgnum)
    }

    const disable =true
    return (
        <div className="paginationdiv" >
            <nav>
                <ul  className="pagination">
                 <li class="page-item">
                  <a id="prevbtn" onClick={previousClick}  class="page-link" href="#" aria-label="Previous">
                     <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                  </li>
                    {pageNumbers.map(number=><li key={number} className="page-item">
                        <a onClick={(e)=>{
                            e.preventDefault()
                            paginate(number)
                            setcrntpgnum(number)
                            console.log("crntpgnum: "+crntpgnum,number)}} href="nothing" className="page-link">{number}</a></li>)}
                              <li class="page-item">
                            <a  id="nextbtn" onClick={nextClick} class="page-link" href="#" aria-label="Next">
                                 <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Next</span>
                              </a>
                              </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
