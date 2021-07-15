import React, { Component } from "react";
import {Link} from "react-router-dom"
import regImg from "./register.png"
import {TextField} from "@material-ui/core"
import "../../style.scss";
import api from '../../utils/api';

 export default class Register extends Component {
state = {
username:"",
usernameerror:"",
email:"",
emailerror:"",
password:"",
passworderror:"",
errors:'',
alert:null,
error:''
  }


handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
 
 
  }

   validatefields = () =>{
    let errors = {}
    let isError = false
  
    if (!this.state.username.trim()) {
        isError = true;
        errors.username= 'Username is required';
    }
     else if (!/^[A-Za-z]+/.test(this.state.username)) {
       isError = true
      errors.username = 'Enter a valid name';
      
    }
     else if (this.state.username) {
       isError = false;
      errors.username = '';
      
    }
  
  
    if (!this.state.email) {
      isError = true;
      errors.email = 'Email is required';
    } 
    else if (!/\S+@\S+\.\S+$/.test(this.state.email)) {
      isError = true;
      errors.email = 'Email address is invalid';
    }
    else if (this.state.email) {
      isError = false;
     errors.email = '';
     
   }


    if (!this.state.password.trim()) {
      isError = true;
      errors.password = 'Password is required';
    }
     else if (this.state.password.length < 6) {
      isError = true;
      errors.password = 'Password needs to be atleast 6 characters';
    }
    else if (this.state.password) {
      isError = false;
     errors.password= '';
     
   }
  
      if(isError)
      {this.setState(
        {emailerror:errors.email, 
        passworderror:errors.password,
        usernameerror:errors.username})}
  
    return isError;
  
  
  }
  clear = () => {
    this.setState({
      username: "",
      email:"",
      password:"",
      passworderror: "",
      usernameerror: "",
      emailerror: "",
      errors:""
      
    });}

   submit = (e) =>{
    e.preventDefault();

   const error = this.validatefields()

   if (!error){
    const payload = {
       username:this.state.username,
      email:this.state.email,
      password:this.state.password,
     
    }
    api.post('/login/form',payload)
      .then(()=> {
        this.clear();
        this.sucessmessage();
        this.props.history.push('/Login')
      })
    .catch(error => this.setState({errors: error.response.data}))
       console.log (error)

    }

   }
  

    sucessmessage = () =>{
      this.setState({
        alert: alert("Success! Login to use the app")
      

    })}
  

  

 
  render() {
  console.log(this.state) 
    const {errors} = this.state
   
    return (
      <div className="form-container">
        <div className="header">Register</div>
        <div className="content">
        <div className="image">
            <img src={regImg} alt="Vitabu" />
          </div>
          <form className="form" onSubmit = {this.submit} >
            <div className="form-group">
              <label htmlFor="name">name</label>
              <TextField
               type="text" name="username"
               value = {this.state.username}
               onChange={this.handleChange} placeholder="name" 
               InputProps={{ disableUnderline: true }}
               error
               helperText
               ={this.state.usernameerror}
  
               />
              <div className="red">
                {errors}</div> 
       
            </div>
           
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <TextField
                type="email" 
              name="email"placeholder="email" 
                value= {this.state.email}
               onChange={this.handleChange}
               InputProps={{ disableUnderline: true }}
               error
               helperText
               ={this.state.emailerror} />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              < TextField 
               type="password" 
              name="password"placeholder="password"
               autoComplete="true" value= {this.state.password}
                onChange={this.handleChange} 
                InputProps={{ disableUnderline: true }}
                error
                helperText
                ={this.state.passworderror}/>
            </div>
         
          
             <button className="btn">Register </button> 

     
          </form>
          <div className="toggler">
            Member?

          <Link to ="./Login"> Login</Link>
          </div>
        </div>
      
      

      </div>
    );
    }
  }

  