import  { useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, 
  useSelector} from 'react-redux';
import "../../style.scss";
import Post from "../Forms/Record"
import { Button,Paper,Typography } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { getBooks } from '../../Actions/Records';
import Footer from './Footer';
import {Link} from "react-router-dom"
import SearchAppBar from '../Forms/search';


  const Feed = () => {


    const useStyles = makeStyles({
      root: {
        maxWidth: 345,
        minWidth:280,
        margin:15,   
       
      },
      media: {
        height: 200,
    
      },
      display: {
        display: 'flex',
    
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
   
  const [search, setSearch] = useState('')

   const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

   const  posts = useSelector((state) => state.records)


   const [visible, setVisible] = useState(4);
  
 const showMore =() =>{

   setVisible(visible + 4);
  }
  

   useEffect(() => {
    dispatch(getBooks());
     },[currentId,dispatch])

  



 const top = () => {

  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
 }

  return (
      
   
     <div className="posts">
<SearchAppBar search ={search} setSearch={setSearch}/>
    <div className = "Dashboard">
  {!isAuthenticated ? 
      <Paper className = {classes.paper}>
      <Typography variant = "h6" align="center">
        
        Please<Link to ="/Login" className="red">  Sign in</Link> to like and Post Books on the site
      </Typography>
     
      </Paper>
      
      : ''}

      
<div className="display1">
{posts.slice(0,visible).filter((post) => {
  
  if(search ===''){

    return post
   }

 else if  (post.Title.toLowerCase().includes(search.toLowerCase())) {

  return post
  }  
  return false;
      
 }).map((post) =>   

   <Post  key={post._id} post={post} formData={formData} setFormData={setFormData} currentId={currentId} setCurrentId={setCurrentId} top={top} classes={classes}  />


       ) }


  </div>

  </div>

  <div>
  {(posts.length? posts.length >= visible : '') &&(

         <Button className ={classes.button} onClick ={showMore}>----Load More----</Button>
      )}
   
  
    <button className="btnnn" onClick={top}>
      <ArrowUpward/>
    </button>
  </div> 
  
        <Footer/>
  </div>
      
   
  )
}


export default Feed;
