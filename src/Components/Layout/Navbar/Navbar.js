import React from 'react';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import Socials from './Socials';



export default function Navbar() {
  
  
  return (
    
    <div className="Nav-Wrapper">
     <Socials/>
     
     <Link to='/'
      className="NavLink1">
          VITABU
     </Link>

      
      <Burger />

    </div>
  )
}
