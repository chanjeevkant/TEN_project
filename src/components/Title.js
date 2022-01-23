import React from 'react'
import carticon from '../icons/carticon.png'


function Title() {
    return (<section id="title">
    <div>
        
        <div className="titlename" >
            <p style={{fontSize:"43px"}} className="titlemargin"><span style={{textShadow:"rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px"}}>T</span>
            <span style={{color:"#E81038"}}>he</span></p>
            <p style={{fontSize:"43px"}} className="titlemargin"><span>E</span><span style={{color:"#E81038"}}>ntrepreneurship</span></p>
            <p style={{fontSize:"43px"}} className="titlemargin"><span>N</span><span style={{color:"#E81038"}}>etwork</span></p>
        </div>
        <div className="Brandlogo">
            <img style={{width:"80%"}} src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="BrandLogo"></img>
        </div>
        <div >
            <button type="button" className="btn btn-lg btn-danger cartbutton"><img src={carticon} alt="carticon"></img></button>
        </div>
        <div>
            <button className="btn btn-lg loginbtn" ><i class="far fa-user"></i> Log In</button>
        </div>
        <div>
            <form >
            <input placeholder="Search here..."  className="titleinput"/><i class="fas fa-search searchicon"></i>
            </form>
        </div>
        
        </div>
        </section>
    )
}

export default Title
