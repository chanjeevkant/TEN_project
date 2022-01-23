import React from 'react'
import Internships from './Intership'

function Bootstrapmenu() {
console.log(Internships);
  const setbtntext=(e)=>{
    e.preventDefault()
document.getElementById("dropdownMenuButton1").innerText = document.getElementById(e.target.id).innerText
  }
    return (
        <div>
 <div>
  <button style={{textAlign:"left"}} className="btn  bootstrapmenu " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span style={{float:"right"}} className="dropdown-toggle"></span>
  </button>
  <ul style={{marginLeft:"15%" ,width:"50%"}} className="dropdown-menu hiringul scrollbar" aria-labelledby="dropdownMenuButton1">
    {Internships.map((internship)=><li onClick={setbtntext} style={{paddingLeft:"2%"}}><a class="dropdown-item" id="" id={internship} href="">{internship}</a></li>)}
    
 
  </ul>
</div>
        </div>
    )
}

export default Bootstrapmenu
