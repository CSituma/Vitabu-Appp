import React, { Component } from 'react'
import Post from "../Forms/Record"

export class Feed extends Component {


  render() {
    return (
      <div className="posts">
      <div className = "Dashboard">
    
        <div className="display">
    
       <Post/>
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
