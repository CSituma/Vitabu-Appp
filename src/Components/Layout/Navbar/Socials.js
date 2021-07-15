import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon  from '@material-ui/icons/MailOutline';




const Socials = () => {

  const styles = {
    Icons:{
      fontSize:"15px",
      color:"white",
    },

  }
  return (
 <div className="social">
   
  
  <a target="_blank" rel="noreferrer" href="tel:0726056055">
     <CallIcon style={styles.Icons}/>
     </a>


  <a target="_blank" rel= "noreferrer" href="https://twitter.com/vitabu"> 
  <TwitterIcon style={styles.Icons}/>
  </a>


<a target="_blank" rel="noreferrer" href="mailto:vitabuapp@gmail.com"> 
<MailOutlineIcon style={styles.Icons}/>
</a>
   
 </div>
  
  )
}

export default Socials
