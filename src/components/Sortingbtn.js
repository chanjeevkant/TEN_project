import React from 'react'

function Bootstrapmenu() {

  const sortlist = ["Newest","Price(low to high)","Price(high to low)","NameA-Z","NameZ-A"]

  const sortcourses=(e)=>{
    e.preventDefault()
  }
    return (
        <div>
        <div>
         <button style={{textAlign:"left"}} className="btn  sortingbtn " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
           <span style={{float:"right"}} className="dropdown-toggle"></span>Sort by
         </button>
         <ul style={{backgroundColor:"#3d3d3d"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           {sortlist.map((internship)=><li  onClick={sortcourses} style={{paddingLeft:"2%",backgroundColor:"#3d3d3d"}}><a style={{color:"white"}} class="dropdown-item sortingli"  id={internship} href="">{internship}</a></li>)}
         </ul>
       </div>
               </div>
    )
}

export default Bootstrapmenu
