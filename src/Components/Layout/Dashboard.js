import  { useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, 
  useSelector} from 'react-redux';
import "../../style.scss";
import PostForm from '../Forms/postForm';
import { Button,CircularProgress} from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import {  getBooksByUser } from '../../Actions/Records';
import UserPosts from '../Forms/Userposts';
import Footer from './Footer';
import SearchAppBar from '../Forms/search';
//import { logout } from '../../Actions/loginUser';

  const Dashboard = () => {


    const useStyles = makeStyles({
      root: {
        maxWidth: 345,
        minWidth:280,
        margin:15,   
       
      },
      media: {
        height: 200,
    
      },
  
      button :{
        backgroundColor:'black',
        height: 100,
        color:'white',
        float:'right',
    
      
      },
    bodypost: {
      maxWidth: 345,
      wordWrap:'break-word',
      },
    avatar: {
       backgroundColor:'gold',
      },
    });
    const classes = useStyles();
    const dispatch = useDispatch();




    const initialState = {

      Title: '',
      Author: '',
      ISBN:'',
      Review:'',
     
   }
   
   const [formData, setFormData] = useState(initialState);
   const [currentId, setCurrentId] = useState(null);
   const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
   const [search, setSearch] = useState('')

   const  Posts = useSelector((state) => state.UseRecords)

   const [visible, setVisible] = useState(4);
  
 const showMore =() =>{

   setVisible(visible + 4);
  }
  
   useEffect(() => {
 if(!isAuthenticated){
   window.location.reload();
   }dispatch(getBooksByUser());

   },[currentId,dispatch,isAuthenticated])

    

   const clear = () => {
   
    setFormData({...initialState})
     setCurrentId(null);
   //  errors = '';
  
 };
//    const deleteAccount = () => {
   
//    dispatch(deleteUser())

//    dispatch(logout())

   
  
//  };
  


 const top = () => {

  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
 }


  return (
   
!isAuthenticated ? 
<CircularProgress/>

 : (
     <div className="posts">
  <SearchAppBar   search ={search} setSearch={setSearch}   />
    <div className = "Dashboard">
    
     <PostForm formData={formData} setFormData={setFormData} currentId={currentId} clear={clear} />


     <div className="display1">
 
  
 {Posts.slice(0,visible).filter((post) => {
   

   if(search ==='')  return post
 
  else if  ((post.Title.toLowerCase().includes(search.toLowerCase())) ||(post.Author.toLowerCase().includes(search.toLowerCase()))) {
 
   return post
   }  
   return false;
       
  }).map((post) =>   
 
    <UserPosts  key={post._id} post={post} formData={formData} setFormData={setFormData} currentId={currentId} setCurrentId={setCurrentId} top={top} classes={classes}  />
 
 
        ) }
 
 
   </div>

  </div>

  <div>
  {(Posts.length? Posts.length >= visible : '') &&(

         <Button className ={classes.button} onClick ={showMore}>----Load More----</Button>
      )}
   
   
  
    <button className="btnnn" onClick={top}>
      <ArrowUpward/>
    </button>
  </div> 
  
    
        <Footer/>
  </div>

  ))
}


export default Dashboard;
