import  { useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, 
  useSelector} from 'react-redux';
import "../../style.scss";
import PostForm from '../Forms/postForm';
import { Button,Paper,Typography } from '@material-ui/core';
import {Link} from "react-router-dom"
import { ArrowUpward } from '@material-ui/icons';
import { deleteUser, getBooksByUser } from '../../Actions/Records';
import UserPosts from '../Forms/Userposts';
import Footer from './Footer';
import SearchAppBar from '../Forms/search';
import { logout } from '../../Actions/loginUser';

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
   localStorage.getItem('token');
   }dispatch(getBooksByUser());

   },[currentId,dispatch,isAuthenticated])

    

   const clear = () => {
   
    setFormData({...initialState})
     setCurrentId(null);
   //  errors = '';
  
 };
   const deleteAccount = () => {
   
   dispatch(deleteUser())

   dispatch(logout())

   
  
 };
  


 const top = () => {

  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
 }


  return (
   
!isAuthenticated ? 
<Paper className = {classes.paper}>
      <Typography variant = "h6" align="center">
        
        Please<Link to ="/Login" className="red">  Sign in</Link> to like and Post Books on the site.
      </Typography>
     
      </Paper>

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
  
        {(isAuthenticated)&&( <button className="NavBtnLink" onClick = {deleteAccount}>DELETE ACCOUNT </button>)}
        <Footer/>
  </div>

  ))
}


export default Dashboard;
