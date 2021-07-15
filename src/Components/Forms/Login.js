import  { Component } from "react";
import loginImg from "./register.png";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import LoginUser from "../../Actions/loginUser"
import getcurrentuser from "../../Actions/loginUser"
import {Link, Redirect} from "react-router-dom"
import {TextField} from "@material-ui/core"
import "../../style.scss";

class Login extends Component {

state = {
email:"",
password:"",
errors:''
  }

  handleChange = (e) =>{

    this.setState({[e.target.name]:e.target.value})
        
    }
 

     clear = () => {
    this.setState({
      email: '',
      password: '',
      errors:''

  
    });
  };
  

   submit = (e) =>{
    e.preventDefault();
    const {email,password} = this.state
   this.props.LoginUser(email, password);

   this.clear();
   
   
  /*axios({
    url: '/api/login/loginuser',
    method: 'POST',
    data: payload
  })
    .then( res => {
      console.log(res.data)
       this.clear();

    })
    .catch(error  => this.setState({errors:error.response.data}));*/
    
  }

  
  
   
  render() {

    if (this.props.isAuthenticated) {

      return <Redirect to="/dashboard" /> 

    }
    
  
  console.log(this.props)

  
  
    return (
      <div className="form-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="loginimage" />
          </div>
          <form className="form" onSubmit = {this.submit} >
            <div className="form-group">
              <label htmlFor="email">email</label>

              <TextField
              type="text" name="email" 
              value = {this.state.email}
               onChange={this.handleChange} 
               placeholder="email"
               InputProps={{ disableUnderline: true }}
               error
               helperText
               ={this.props.errors}

              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <TextField
               type="password" name="password"
              placeholder="password" 
              autoComplete="true" 
              value= {this.state.password} 
              onChange={this.handleChange} 
              InputProps={{ disableUnderline: true }}
          
              />
            </div>
         
             <button className="btn">
                 login
                 </button> 


          </form>
          <div className="toggler">
            New Here?
          <Link to ="./register">Sign up</Link>
          </div>
        </div>
      
      

      </div>
    );
    }
}
Login.prototypes = {
LoginUser:PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool,
errors: PropTypes.string

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors:state.auth.errors
  
})



export default connect(mapStateToProps,{LoginUser,getcurrentuser})(Login)
