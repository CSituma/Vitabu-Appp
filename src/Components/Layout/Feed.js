import React, { Component } from 'react'
import Posts from "../Forms/Records"

export class Feed extends Component {


  render() {
    return (
      <div className="posts">
      <div className = "Dashboard">
    
        <div className="display">
    
       <Posts/>
        </div>
  
    </div>
  
    <div>
      <button className="NavBtnLink">DELETE ACCOUNT </button>
    </div>
    </div>
    )
  }
}

export default Feed
