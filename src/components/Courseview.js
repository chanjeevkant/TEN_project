import React from 'react'

function Courseview() {
    return (
        <div>

        <div className="courseviewdiv ">
            <div className="coursesimg">
            <img className="courseviewimg1" src="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1138,h_590,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp" alt="courseimg"></img>
        </div>
        <div className="courseviewcont2">
       <h2 style={{marginTop:"15%"}}>Entrepreneurship</h2>
        <h2>made fun</h2>
        <button className="btn-lg courseviewbtn1">Explore Here</button>
        </div>
            </div>

            <div className="courseviewdiv" style={{marginTop:"0%"}}>
                <div>
                <img className="courseviewimg2" src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_850,h_563,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp" alt="courseviewimg2"></img>
            </div>
            <div className="courseviewcont2"><h1 style={{marginTop:"20%"}}>Digital</h1>
            <h1>Marketing</h1>
            <button className="btn-lg courseviewbtn1" >Explore Here</button>
            </div>
            <div><img className="courseviewimg3" alt="courseviewimg3" src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_425,h_563,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp"></img></div>
            </div>

            <div className="courseviewdiv" style={{marginTop:"0%"}}>
            <div className="courseviewcont2">
       <h2 style={{marginTop:"9%"}}><a style={{color:"white"}} href="">Product Management</a></h2>
        <h2><a style={{color:"white"}} href="">like a Pro</a></h2>
        <button className="btn-lg courseviewbtn1" style={{marginTop:"13%"}}>Explore Here</button>
        </div>
            <div className="coursesimg">
            <img alt="courseviewimg4" className="courseviewimg4" src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_850,h_555,al_c,q_85,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp"></img>
        </div>
            </div>

            </div>
    )
}

export default Courseview
