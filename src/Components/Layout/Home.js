import React from "react";
import {Link,Redirect} from "react-router-dom"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function Home({isAuthenticated}) {

  if (isAuthenticated) {
    return <Redirect to='/Dashboard' />;
  }
  return (
    <div className="Homepage">
      <h2>You need some <span>Shelf </span>control</h2>
     
       <p>We provide a free library system for the books on your shelf.</p>
      
        <Link to ="/Login"> <button className="btnn">   Let's Get Started </button>  </Link>
        
    </div>

  )
}
Home.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);