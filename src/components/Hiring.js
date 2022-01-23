import React from 'react'
import Onlinecourses from './Onlinecourses'
import Bootstrapmenu from './Bootstrapmenu'
import Bootstrapmenu2 from './Bootstrapmenu2'
import Bootstrapmenu3 from './Bootstrapmenu3'



function Hiring(props) {

    const inputstyle={
        textAlign:"left",
        border:"none",
        outline:"none",
        padding:"6px 0px"
    }
    
    return (
        <div style={{paddingBottom:"5%"}}>
         <div className="hiringbgimg1">
             <div className="interndiv">
             <h3 style={{paddingTop:"1.5%",color:"white",fontSize:"26px",textAlign:"center"}}>We Are Hring Interns</h3>
             <p style={{color:"white",fontSize:"17px"}}>The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.</p>
             <p style={{color:"white",fontSize:"17px"}}>There is a small registration fee, INR 100 /- (RUPEES ONE HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.</p>
             <div className="Linkers">
                 <div>
                 <p style={{fontWeight:"bold",color:"white",fontSize:"18px"}}>Scan the QR code to complete your payment and submit the below application form to start with your registration process.</p>
                 <p style={{color:"white",fontSize:"17px"}}>Please keep the payment transaction ID handy for submitting the form.</p>
                 <p style={{color:"white",fontSize:"17px"}}>Note: This internship does not offer an opportunity to earn money,rather helps an individual grow by working on the job and earn a certificate upon successful completion.</p>
                 <p style={{color:"white",fontSize:"17px"}}>Check out few of our open internship positions below Refer the application form for more open positions.</p>
                 <p style={{fontWeight:"bold",color:"white",fontSize:"18px",paddingTop:"1%"}}>Digital Marketing Interns</p>
                 <p style={{fontWeight:"bold",color:"white",fontSize:"18px",paddingTop:"1%"}}>General Management Interns</p>
                 <p style={{fontWeight:"bold",color:"white",fontSize:"18px",paddingTop:"1%"}}>Technical/Software Experts</p>
                 <p style={{fontWeight:"bold",color:"white",fontSize:"18px",paddingTop:"1%"}}>Product Management Interns</p>
                 <p style={{fontWeight:"bold",color:"white",fontSize:"18px",paddingTop:"1%"}}>Content Interns and more...</p>
                 </div>
                 <div >
                 <img style={{width:"358px",height:"478px"}} alt="QR code" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_448,h_598,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp"></img>
                 </div>
             </div>
             </div>
         </div>
         
         <div className="hiringbgimg2" >
         <div className="applicationform" >
             <h2 style={{fontFamily:"sans-serif"}} >Application Form</h2>
             <div >Registration Fee Rs.100/-</div>
             <div className="Linkers dropdownbtndiv" style={{flexDirection:"column"}}>
             <div className="dropdownbtn" >
                 <label style={{paddingRight:"25%"}}>Choose relevant intership opening<span style={{color:"red"}}>*</span></label><br/>
                 <Bootstrapmenu/>
             </div>
             <div className="dropdownbtn">
                 <label style={{paddingRight:"25%"}}>What's your employment status?<span style={{color:"red"}}>*</span></label><br/>
                 <Bootstrapmenu2/>
             </div>
             <div className="dropdownbtn">
                 <label style={{paddingRight:"25%"}}>Do you have previous experience?<span style={{color:"red"}}>*</span></label><br/>
                 <Bootstrapmenu3/>
             </div>
             <div style={{border:"none"}} className="dropdownbtn">
                 <label style={{paddingRight:"34%"}}>Payment Transaction ID:<span style={{color:"red"}}>*</span></label><br/>
                 <input style={inputstyle} className=" bootstrapmenu"/>
             </div>
             </div>
             <button className="btn applicationbtn " >Next</button>
             </div>
             </div>
     
        
        </div>
    )
}

export default Hiring
