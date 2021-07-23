import  { useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import "../../style.scss";

import { TextField } from '@material-ui/core';
import  { addBooks,updateBooks} from "../../Actions/Records"



  const PostForm = ({formData,setFormData,currentId,clear}) => {
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

   const classes = useStyles();



  const handleChange = (e) =>{

   setFormData({...formData, [e.target.name]:e.target.value})
        
    }
    const {Author,Title,ISBN,Review} = formData

     //////Validation
const [errors, setErrors] = useState({
 
  TitleError:'', 
  AuthorError:'', 
 ISBNError:'', 


})

const validatefields = () =>{
  let errors = {}
  let isError = false

  if (!Title.trim()) {
      isError = true;
      errors.Title= 'Title field is empty';
  }
  else if (!ISBN.trim()) {
      isError = true;
      errors.ISBN= 'Provide an ISBN Number to identify your book(Only you can see it)';
  }
  else if (!Author.trim()) {
      isError = true;
      errors.Author= 'Who wrote the book?';
  }
   else if (!/^[A-Za-z]+/.test(Title)) {
     isError = true;
    errors.Title = 'Enter a valid Title';
    
  }
  
   else if (!/^[A-Za-z]+/.test(Author)) {
     isError = true;
    errors.Author = 'Enter a valid Authors Name';
    
  }

  else if (Title) {
    isError = false;
    errors.Title = '';
   
 }
  else if (Author) {
    isError = false;
    errors.Author = '';
   
 }
    else if (ISBN) {
     isError = false;
    errors.ISBN = '';
    
  }

    if(isError)
  setErrors({
        TitleError:errors.Title, 
        AuthorError:errors.Author, 
       ISBNError:errors.ISBN})

  return isError;


}
console.log(errors)

const clearErrors = () =>{
  setErrors({
    TitleError:'', 
    AuthorError:'', 
   ISBNError:''})


}
////////////////////////
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user)   



   ////Populatng form wih post data to edit//////////////
   
const post = useSelector((state) =>currentId ? state.records.find((p)=>p._id === currentId) : null);
const Post = useSelector((state) =>currentId ? state.UseRecords.find((p)=>p._id === currentId) : null);


console.log(post)

const User = JSON.parse(user) 



useEffect(() => {
 if(Post) setFormData(Post)
}, 
[setFormData,Post]
)

  
  const submit = (e) => {
   const id= currentId
   e.preventDefault();
   const error = validatefields()

   if (!error){
    
   if(currentId){

dispatch(updateBooks(id,formData));

   }
   else{
  dispatch(addBooks(formData));
   }

   
   clear()
   clearErrors()
  }

}


  return (
 
      
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
        
            
            
               
              <label htmlFor="title">TITLE</label>
              <TextField
               type="text" name="Title"
               value= {Title} 
               onChange={handleChange} 
               placeholder="Title"    
               /> 

               <div className="red">
               {errors.TitleError}
               </div>
       
            </div>
            <div className="form-group">
              <label htmlFor="author">AUTHOR</label>
              <TextField
               type="text" name="Author"
               value= {Author} 
              onChange={handleChange} 
               placeholder="Author" 

               /> 
       
       <div className="red">
               {errors.AuthorError}
               </div>

            </div>

            <div className="red">
               {errors.formData}
                </div> 
            <div className="form-group">
              <label htmlFor="isbn">ISBN NO.</label>
              <TextField
               type="text" name="ISBN"
               value= {ISBN} 
              onChange={handleChange} 
               placeholder="ISBN" 
                   
               /> 
       <div className="red">
               {errors.ISBNError}
               </div>


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
  
}



 export default PostForm