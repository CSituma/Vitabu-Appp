
import {useDispatch, useSelector} from 'react-redux';
import LoginImg from "../Images/register.png"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {Typography,Button,Card,CardMedia,CardContent
  ,CardActions, CardActionArea,CardHeader,
 Avatar,} from '@material-ui/core/';
import moment from "moment";
import "../../style.scss";
//import { CircularProgress} from '@material-ui/core';
import { deleteBook,addLike} from "../../Actions/Records";



const UserPosts = ({setCurrentId,top,classes,post,}) => {
  // {allrecords:{posts},auth:{user,isAuthenticated,loading}}

 const dispatch = useDispatch();

const user = useSelector((state) => state.auth.user)
const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    

 const User = JSON.parse(user);
  
  return(

  
    <div >
      

<Card className={classes.root} >
      <CardActionArea>
      <CardHeader
     
        avatar = {
       
          <Avatar aria-label="recipe" className={classes.avatar}>
          { post.user.charAt(0)}
         </Avatar>
         
        }
        action = {
        <div>
  <Typography variant="body2" color="textSecondary" className={classes.bodypost}
           component="h5">
     Edit
          </Typography>
 {!isAuthenticated? '' :   (

(User.id === post.Creator) && (
   
  <MoreVertIcon  disabled={!user} aria-label="recipe"  onClick = {() => {
   
  top();
      
setCurrentId(post._id);
} 
 } />
 
)  

)}
 </div>
      
        }
        
        title={post.Title}
        subheader={moment(post.Date).fromNow()} 
      />
        <CardMedia
          className={classes.media}
          image={LoginImg}
          title="Book Title"   
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
           Author: {!post? "Author" : post.Author}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
          {!isAuthenticated? '' :   (

            (User.id === post.Creator) && (
            post.ISBN))}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.bodypost}
           component="h5">
          {!post ? "Review of the book" : post.Review}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
        disabled={!user}
         onClick = {() => dispatch(addLike(post._id))}>


           {!isAuthenticated ? <> <ThumbUpAltOutlined fontSize="small" />&nbsp;Like</> :(
           
            post.Likes.length > 0 ? post.Likes.find((like) => like ===  User._id) ?
         (
      <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.Likes.length > 2? `You and ${post.Likes.length - 1} others` : `${post.Likes.length} like${post.Likes.length > 1 ? 's' : ''}` }</> ) : (
      <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.Likes.length} {post.Likes.length === 1 ? 'Like' : 'Likes'}
      </>): <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
      
       
           )}
          
        
           </Button>
     

     {!isAuthenticated? '' :   (

(User.id === post.Creator) && (
<Button size="small" color="primary"
 onClick = {() => {dispatch(deleteBook(post._id))}}>

  <DeleteIcon />
        </Button>
)  

)}
 
        <Typography variant="body2" color="textSecondary" className={classes.bodypost}
           component="h5">
    
     Posted By: {!isAuthenticated? post.user : (User.id === post.Creator)? "You" : post.user} 
         
          </Typography>
      </CardActions>
  
    </Card>
   
        </div>   
    
      )
      }
   


export default UserPosts;