
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

   useEffect(() => {
    AOS.init({
      duration :2000
    })
  })
 
  return (
    
<div className="About">


   <div className = "theminis">
<div className="minis" data-aos='fade-up' data-aos-once="false">
  
<h2>SUPPORT</h2>
<p> We provide 24/7 Support
</p>
</div>

<div className="minis" data-aos='fade-up' data-aos-once="false">
  
<h2>SAFE </h2>
<p> Secure logins and Data Storage</p>
</div> 

<div className="minis" data-aos='fade-up' data-aos-once="false">
    
<h2>
  
  COMMUNITY </h2>
<p> We're building a community of book lovers, </p>
 <p> Providing a place to recommend books and share.
</p>
</div>
</div>


<div className = "intro" data-aos='fade-in' >
<h2>WHO <span className="white">WE</span> ARE</h2>
    <p>Vitabu means books in swahili.</p>
     <p>We provide an inventory and storage for the books on your shelf. </p>
   <p> Your whole library, in your hands. </p>
   <p>Rate,Review and Like A range of Books</p>
   <h1 className="gold" data-aos='fade-right' data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">Why Us?</h1>

  </div>

<div className="why-text">
    <h2>
   WE'RE MOST  SUITABLE FOR:
    </h2>
</div>
<div className="Services-wrapper">
        <div className="box" data-aos='fade-up' data-aos-once="false">
       <h3>Parents</h3>
       <p>
         Every Term/Semester, we buy books for our Kids.
         They can't seem to Keep track of the books once they get to school.
         </p>

                   <p>
        Keeping your record with us, eliminates this uncertainity.
         </p>
                
                </div>
            
        <div className="box" data-aos='fade-up' data-aos-once="false">
       <h3>Book Clubs</h3>
       <p> 
             Your book club needs to take accountabilty
             for the books you've read.
             What better place to keep track of your sessions than here?
         
          </p>       
                </div>
               
        <div className="box" data-aos='fade-up'>
       <h3>Book Lovers</h3>
       <p>If you're a book lover,
         you probably have a shelf with books you can't account for.
        
       </p>
               <p>Most importantly though. you might want to accurately 
                 talk about the books you've read at a social meet-up</p>
           </div>
              

</div>
<div className = "ffooter">
<div>@copyright Vitabu 2020</div>
<div> Build by Clara Situma</div>
<div>Nairobi,Kenya</div>
</div>
    </div>
  )
}
