import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { logout } from '../../Actions/loginUser';
import "../../style.scss"
import Socials from '../Layout/Navbar/Socials';
import Header from '../Layout/Navbar/Header';

const Navbar = () => {

const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout());
  };

const defaultLinks = (
  <>
   <Socials/>
     <div className ="Nav-Wrapper">
    
  <Header/>
   <div className="menu">
   
    <Link to='/About'
        className="NavLink">
          About
        </Link>
        <Link to='/Feed'
        className="NavLink">
          Feed
        </Link>
       
        <Link to='/Login'
        className="NavBtnLink">
        LOGIN
        </Link>
   
  </div>
           
    </div>
    </>
  )

  const memberLinks = (
    <>
       <Socials/>
  <div className ="Nav-Wrapper">
  
     <Header/>

     <div className="menu">
     
      <Link to='/Dashboard' 
            className="NavLink">
            Home
          </Link>
          <Link to='/Feed'
          className="NavLink">
            Feed
          </Link>
          <Link to='/Login'
          onClick={handleClick}
          className="NavBtnLink">
          Logout
          </Link>
     </div>
         
    </div>
    </>
  )


  return (
       <Fragment>
         {isAuthenticated ? memberLinks : defaultLinks}
       </Fragment> 
    
  );
};


export default Navbar;
