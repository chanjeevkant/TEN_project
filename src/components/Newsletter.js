import React from 'react'

function Newsletter() {

    const handlesubmit = (e)=>{
e.preventDefault()
    }
    return (
        <div className="footerin" style={{textAlign:"center"}}>
            <form onSubmit={handlesubmit}>
                <h5>Subscribe to our newsletter</h5>
                

                <div  className="Linkers">
                <input className="newsinput" type="text" placeholder="Full Name"/>
                <input className="newsinput" type="text" placeholder="College Name"/>
                </div>

                <div  className="Linkers">
                <input className="newsinput" type="text" placeholder="Mobile No."/>
                <input className="newsinput" type="text" placeholder="Email"/>
                </div>
                <input style={{width:"5%"}} defaultChecked="true" type="checkbox"/><label><b> Join TEN's Discord Community</b></label><br/>


                <input  type="submit" className="btn newssub"/>

            
                
            </form>
        </div>
    )
}

export default Newsletter
