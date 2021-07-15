import React, { Fragment ,useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Actions/loginUser';
import MenuIcon from '@material-ui/icons/Menu';
import SearchAppBar from "../Forms/search"
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon  from '@material-ui/icons/MailOutline';
import "../../style.scss"

const Navbar = ({auth: { isAuthenticated } }) => {
  const [dmenu, setdmenu] = useState(false);
  const openMenu = () => setdmenu(!dmenu);
  const closeMenu = () => setdmenu(false);


  const styles = {
    Icons:{
      fontSize:"15px",
      color:"white",
    },
    // // FirstIcon:{
    // //   marginLeft:'6em'
    // // }
  }

  const defaultLinks = (
  <div className ="Nav-Wrapper">
 <div className="social">
<h2>      
  <a target="_blank" rel="noreferrer" href="tel:0726056055"> <CallIcon style={styles.Icons}/></a></h2>
<h2>
  <a target="_blank" rel= "noreferrer" href="https://twitter.com/vitabu"> <TwitterIcon style={styles.Icons}/></a>
  </h2>
<h2>
        <a target="_blank" rel="noreferrer" href="mailto:vitabuapp@gmail.com"> <MailOutlineIcon style={styles.Icons}/></a>
</h2>
      
    </div>
       <div className="Nav">
     
        <Link to='/'
          className="NavLink1"
          onClick={closeMenu}>
         VITABU
        </Link>
            <div
        className="Bars"
        
        onClick={openMenu}
        >
            <MenuIcon/>
          </div>
        <div className ="NavMenu">
          <Link to='/About'
          className="NavLink">
            About
          </Link>
          
          <Link to='/Login'
          className="NavBtnLink">
            Sign In
          </Link>
        
        </div>
        
      </div>
      </div>
  );
  
  const memberLinks = (

   <div className="Nav">

        <Link to='/'
          className="NavLink1"
          onClick={closeMenu}>
         VITABU
        </Link>

            <div
        className="Bars"
        
        onClick={openMenu}
        >
           <MenuIcon/>
            
          </div>
          <SearchAppBar/>
        <div className ="NavMenu">

          <Link to='/Dashboard' 
            className="NavLink" >
            HOME
          </Link>
          <Link to='/Feed'
          className="NavLink">
            FEED
          </Link>
          <Link to='/Login'

          onClick={logout}
          className="NavBtnLink">
          LOGOUT
          </Link>
        
        </div>
        
      </div>

    
  );

  

  return (
       <Fragment>
         {isAuthenticated ? memberLinks : defaultLinks}
       </Fragment> 
    
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);