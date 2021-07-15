import React, { Fragment} from 'react';
import {useSelector,useDispatch} from "react-redux"
import * as S from './style';
import { Link } from 'react-router-dom';
import { logout } from '../../../Actions/loginUser';

const RightNav = ({open}) => {

const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout());
  };


  const defaultLinks = (
    <S.Ul open={open}>
       <Link to='/About'
        className="NavLink">
          About
        </Link>
        <Link to='/Feed'
        className="NavLink">
          FEED
        </Link>
       
        <Link to='/Login'
        className="NavBtnLink">
        Sign In
        </Link>
        
    </S.Ul>
  )

  const memberLinks = (
    
    <S.Ul open={open}>
      
          <Link to='/Dashboard' 
            className="NavLink">
            HOME
          </Link>
          <Link to='/Feed'
          className="NavLink">
            FEED
          </Link>
          <Link to='/Login'
          onClick={handleClick}
          className="NavBtnLink">
          LOGOUT
          </Link>

    </S.Ul>
  )
  return (
    <>
    <Fragment>
     {isAuthenticated? memberLinks : defaultLinks}
    </Fragment> 

    </>
  )
}

export default RightNav