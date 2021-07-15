import React, { useState} from 'react'
import { useSelector } from 'react-redux';
import "../../style.scss";
import {TextField} from "@material-ui/core"
import { CircularProgress } from '@material-ui/core';
import Post from "../Forms/Record"
import PostForm from '../Forms/postForm';

  const Dashboard = () => {

    const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated) 

    const initialState ={

      Title: '',
      Author: '',
      ISBN:'',
      Review:'',
     
   }
   
   const [formData, setFormData] = useState(initialState);
   const [currentId, setCurrentId] = useState(null);
    const {
    
        Title,
          Author,
          ISBN,
          Review,
          
       } = formData


  return (
    !isAuthenticated? <CircularProgress/> :(
     <div className="posts">
    <div className = "Dashboard">
    
     <PostForm formData={formData} setFormData={setFormData} currentId={currentId}/>
  
  
  
     <Post formData={formData} setFormData={setFormData} currentId={currentId} setCurrentId={setCurrentId}/>
      

  </div>

  <div>
    <button className="NavBtnLink">DELETE ACCOUNT </button>
  </div>
  </div>
    
   )
  )
}


export default Dashboard;

