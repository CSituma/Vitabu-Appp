import  { useState} from 'react'
import { useSelector } from 'react-redux';
import "../../style.scss";
import { CircularProgress } from '@material-ui/core';
import Post from "../Forms/Record"
import PostForm from '../Forms/postForm';

  const Dashboard = () => {

    const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated) 

    const initialState = {

      Title: '',
      Author: '',
      ISBN:'',
      Review:'',
     
   }
   
   const [formData, setFormData] = useState(initialState);
   const [currentId, setCurrentId] = useState(null);
  
   const clear = () => {
   
    setFormData({...initialState})
     setCurrentId(null);
   //  errors = '';
  
 };

  return (
    !isAuthenticated? <CircularProgress/> :(
     <div className="posts">
    <div className = "Dashboard">
    
     <PostForm formData={formData} setFormData={setFormData} currentId={currentId} clear={clear}/>
  
  
  
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
