import { useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import "../../style.scss";
import { TextField } from '@material-ui/core';
//import FileBase from 'react-file-base64';
import  { addBooks,updateBooks} from "../../Actions/Records"
import { CircularProgress } from '@material-ui/core';


  const PostForm = ({currentId}) => {
  // {auth:{user,isAuthenticated,loading},records:{errors,post},allrecords:{posts},addBooks})


    const useStyles = makeStyles((theme) => ({
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      text:{
        fontSize:'0.8rem'
      },
      paper: {
        padding: theme.spacing(2),
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
      },
    }));


    const initialState ={

      Title: '',
      Author: '',
      ISBN:'',
      Review:'',
     
   }
   
   const [formData, setFormData] = useState(initialState);

    const {
    
        Title,
          Author,
          ISBN,
          Review,
          
       } = formData

   const classes = useStyles();
  
  const handleChange = (e) =>{

   setFormData({...formData, [e.target.name]:e.target.value})
        
    }

const clear = () => {
   
     setFormData({...initialState})
    //  errors = '';
   
  };
   
  
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user)   
   const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated)


   ////Populatng form wih post data to edit 
   
   const post = useSelector((state) =>currentId ? state.records.posts.find((p)=>p._id === currentId) : null);
console.log(post)

useEffect(() => {
 if(post) setFormData(post)
}, [setFormData,post])

  
  const submit = (e) => {
   const id= currentId
   e.preventDefault();

   if(currentId){

const updatedBooks = {
  Title: formData.Title,
  Author: formData.Author,
  ISBN:formData.ISBN,
  Review: formData.Review

}
dispatch(updateBooks(id,updatedBooks));
   }
   else{
  dispatch(addBooks(formData));

   }

   clear()

   window.location.reload()
    
  }


 
  /*const postId = !post?"" :post._id
     
     useEffect(() => {
    if(postId)
    setFormData({...formData,postId})
     
     }, [postId])*///
   


const User = JSON.parse(user) 

  return (

    !isAuthenticated ? 
    <CircularProgress/> :(

      <div className="form-container">
        <div className="header">
       <p>Hey,

         
       {!user?"hey":  User.username}
       </p>
         <p className={classes.text}> {currentId? "Let's Make some changes..." :"What are you adding to your library today?" } </p>
        </div>
          <div className="content">
          <form className="form" onSubmit ={submit} >
            <div className="form-group">
              {/* <label htmlFor="SelectedFile">IMAGE</label>
              <div className={classes.fileInput}> */}
              {/* <FileBase 
                type="file" 
               multiple={false} 
              value={SelectedFile}
              onDone={({ base64 }) => setFormData({ ...FormData, selectedFile: base64 })} />
              </div>*/}
        
               <div className="red">
                 {/* {!errors?"": errors} */}
                 </div>
               
              <label htmlFor="title">TITLE</label>
              <TextField
               type="text" name="Title"
               value= {Title} 
               onChange={handleChange} 
               placeholder="Title" 
             
              
               /> 
       
            </div>
            <div className="form-group">
              <label htmlFor="author">AUTHOR</label>
              <TextField
               type="text" name="Author"
               value= {Author} 
              onChange={handleChange} 
               placeholder="Author" 
              
            
               /> 
       
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN NO.</label>
              <TextField
               type="text" name="ISBN"
               value= {ISBN} 
              onChange={handleChange} 
               placeholder="ISBN" 
              
            
               /> 
       
            </div>
            <div className="form-group">
              <label htmlFor="review">REVIEW</label>
              <textarea
               name="Review"
              cols="30" rows="7"
              value= {Review} 
              onChange={handleChange} 
               placeholder="what you think about this book?" 
               >
            </textarea>
             
       
            </div>
           
             <button className="btn">SAVE</button> 

     
          </form>
  
        </div>
      </div>
 
   )
  )
}


// PostForm.propTypes = {
//   auth: PropTypes.object,
//   errors: PropTypes.string



// };

// const mapStateToProps = state => ({
//  auth: state.auth,
//  records:state.records,
//  allrecords:state.allrecords,
//  errors:state.records.errors,
//  post: state.records.post,
//  posts: state.allrecords.posts


 
// });

 export default PostForm