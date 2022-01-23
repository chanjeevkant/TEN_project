import React from 'react'
import curriculumnlogo from '../icons/bgimg.jpg'

function Coursebenefits() {
    return (
        <div>
            <h1 class="ribbon">
   <strong class="ribbon-content">Our Course Benefits</strong>
</h1>
<div className="aboutcourse Linkers">

<div className="aboutteachers aboutsmalldiv" style={{width:"30.333%"}}>
<img alt="teacherslogo" className="coursebenefitslogo" src={curriculumnlogo}></img>
<h3 style={{marginTop:"2%"}}>Expert Teachers</h3>
<hr className="abouthr" style={{color:"black"}}></hr>
<p>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
</div>

<div className="aboutnetwork aboutsmalldiv" style={{width:"30.333%"}}>
<img alt="networklogo" className="coursebenefitslogo" src={curriculumnlogo}></img>
<h3 style={{marginTop:"2%"}}>Online Community</h3>
<hr className="abouthr" style={{color:"black"}}></hr>
<p>Feel like home, with a "family of invisible friends".</p>
</div>

<div className="aboutcurriculumn aboutsmalldiv" style={{width:"30.333%"}}>
<img alt="curriculumnlogo" className="coursebenefitslogo" src={curriculumnlogo}></img>
<h3 style={{marginTop:"2%"}}>Flexible Curriculumn</h3>
<hr className="abouthr" style={{color:"black"}}></hr>
<p>Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>
</div>

</div>

        </div>
    )
}

export default Coursebenefits
