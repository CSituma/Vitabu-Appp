import { useState} from 'react'
import { useSelector } from 'react-redux';
import "../../style.scss";
import { CircularProgress } from '@material-ui/core';
import Post from "../Forms/Record"
import PostForm from '../Forms/postForm';

  const Dashboard = () => {

    const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated) 
   const [currentId, setCurrentId] = useState(null);
  return (
    !isAuthenticated? <CircularProgress/> :(
     <div className="posts">
    <div className = "Dashboard">
    
     <PostForm  currentId={currentId}/>
  
  
  
     <Post currentId={currentId} setCurrentId={setCurrentId}/>
      

  </div>

  <div>
    <button className="NavBtnLink">DELETE ACCOUNT </button>
  </div>
  </div>
    
   )
  )
}


export default Dashboard;

