import { Fragment,useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { logout } from '../../../Actions/loginUser';
import "../../../style.scss"
import Socials from './Socials';
import * as S from './style.ts';


const Navbar = () => {

const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
const dispatch = useDispatch()

const [open, setOpen] = useState(false)

  const handleClick = () => {
    dispatch(logout());
  };

const defaultLinks = (
  <>
   <Socials/>
   
     <div className ="Nav-Wrapper">
    
     <Link to='/'
        className="NavLink1">
          VITABU
        </Link>

 <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <div className="menu">

     <S.Ul open={open}>

       <Link to='/About'
       className="NavLink"
      >
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
   
     </S.Ul>
    
  </div>
           
    </div>
    </>
  )


  const memberLinks = (
    <>
     <Socials/>
     
       <div className ="Nav-Wrapper">
      
       <Link to='/Dashboard'
          className="NavLink1">
            VITABU
          </Link>
  
   <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </S.StyledBurger>
        <div className="menu">
  
       <S.Ul open={open}>
  
          <Link to='/Dashboard'
          className="NavLink">
            Home
          </Link>
          <Link to='/Feed'
          className="NavLink">
            Feed
          </Link>
            
          <Link to='/Login'
          className="NavBtnLink"
          onClick={handleClick}
          >
          LOGOUT
          </Link>
     
       </S.Ul>
      
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
