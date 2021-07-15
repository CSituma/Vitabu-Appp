import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {useEffect} from "react"
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux';
import LoginImg from "./register.png"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import moment from "moment"
import Avatar from '@material-ui/core/Avatar';
import { CircularProgress} from '@material-ui/core';
import { getBooks, deleteBook,addLike} from "../../Actions/Records";
//import { getBooksByUser } from '../../Actions/Dashboard';



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


const Post = ({currentId,setCurrentId}) => {
  // {allrecords:{posts},auth:{user,isAuthenticated,loading}}
  const classes = useStyles();
 const dispatch = useDispatch();
const posts = useSelector((state) => state.records.posts)
const user = useSelector((state) => state.auth.user)
console.log(posts)


const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated)


    
    useEffect(() => {
     dispatch(getBooks());
      },[currentId,dispatch])


  //   const [like, setlike] = useState({count:0});

  // const likebutton = {

  //   setlike({count:like + 1})
  // }
  

// const edit = () => {

//   setCurrentId(posts)


//   window.scrollTo({
//     top:0,
//     left:0,
//     behavior:"smooth"
//   })
// }

  const User = JSON.parse(user) 


  return(

    <div className="display1">
   { !isAuthenticated? <CircularProgress/>:(

posts.map((post) => (

<Card className={classes.root} key={post._id} post={post}>
      <CardActionArea>
      <CardHeader
     
        avatar={
       
          <Avatar aria-label="recipe" className={classes.avatar}>
          {!isAuthenticated ? "" : User.username.charAt(0)}
         </Avatar>
         
        }
        action={
         
            <MoreVertIcon onClick = {() => setCurrentId(post._id)} />

        }
        title={!isAuthenticated ? "Title" : post.Title}
        subheader={moment(!post?Date.now():post.Date).fromNow()} 
      />
        <CardMedia
          className={classes.media}
          image={LoginImg}
          title="Book Title"   
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
           By: {!post? "Author" : post.Author}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            {!post? "ISBN NO" : post.ISBN}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.bodypost}
           component="h5">
          {!post ? "Review of the book" : post.Review}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {() => dispatch(addLike(post._id))}>
          <ThumbUpAltIcon /> 
        { post.Likes}
        </Button>
        
        <Button size="small" color="primary"  onClick = {() => dispatch(deleteBook(post._id))}>
         <DeleteIcon/>
        </Button>
      </CardActions>
   
    </Card>
   

     )  ))
      } 
        </div>
      )
      }
   


export default Post;