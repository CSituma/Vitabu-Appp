import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {useEffect} from "react";
import Post from "./Record"
import { CircularProgress} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth:280,
    margin:15,
  },
  media: {
    height: 200,

  },
bodypost: {
  maxWidth: 345,
  wordWrap:'break-word',
  },
avatar: {
   backgroundColor:'gold',
  },
});


const Posts = () => {

  const classes = useStyles();
 //const dispatch = useDispatch();
const posts = useSelector((state) => state.records.posts)
//const user = useSelector((state) => state.auth.user)
//const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    


  return(

    <div className="display1">


   {posts.map((post) => (

<Post key={post._id} post={post}/>
   
    ))
     }  </div>
      )
  
      }
   


export default Posts;