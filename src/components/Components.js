import React, { useState ,useEffect} from 'react'
import Title from './Title';
import Linkers from './Linkers';
import Imagedecos from './Imagedecos';
import Footer from './Footer';
import Copyright from './Copyright';
import Chatbutton from './Chatbutton';



function Components() {

    const[imagedecos ,setimagedecos]=useState(true)
    const homepath = "http://localhost:3000/"
    useEffect(() => {
      if(window.location.href===homepath || window.location.href===(homepath+"#footer"||window.location.href==="http://localhost:3000") )  {
          setimagedecos(true)
      }else{
          setimagedecos(false)
      }
        
    }, [])

    return (
        <div>
     <Title />
     <Linkers page={imagedecos} pagesetter={setimagedecos}/>
   {imagedecos? <Imagedecos />:null}
    <Footer/>
    <Copyright/>
    <Chatbutton/>
   
        </div>
    )
}

export default Components
