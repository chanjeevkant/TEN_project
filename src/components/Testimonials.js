import React from 'react'

function Testimonials() {
    return (
        <div style={{textAlign:"center"}}>
            <div>
                <h1 className="testimonialh1">Testimonials</h1>
                <hr className="abouthr" style={{width:"12%"}}></hr>
                </div>


                <div id="carouselExampleControls" class="carousel slide slidingwindow" data-ride="false">
                <div class="carousel-inner">
                  <div class="carousel-item active carouselele">
                   <span className="carouselp">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</span><br></br>
                   <span className="carouselp" >-Aakriti Malik, DM Intern</span>
                  </div>
                  <div class="carousel-item carouselele">
                  <span className="carouselp">TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.</span><br></br>
                   <span className="carouselp" >-Harsh Rajput, General Management Intern</span>
                  </div>
                  <div class="carousel-item carouselele">
                  <span className="carouselp">I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.</span><br></br>
                   <span className="carouselp" >Thank you team TEN!</span><br></br>
                   <span className="carouselp" >-Kshema Unni, Business Development Intern</span>
                  </div>
                  </div>
              
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" ></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" ></span>
                </a>
              </div>
                
      </div>
    )
}

export default Testimonials

