import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {firebaseApp} from '../config/firebase'

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            emailWarnText:"",
            pwdWarnText:"",
            signInStatus:""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(()=>{
            console.log("Login Success!")
            this.props.history.push('/home');
        }).catch((err)=>{
            this.setState({signInStatus:err.message});
            console.log("Login Error",err);
        })
    }

    render(){
        return (
            <div className="login-div">
            
            <h1>My Movies</h1><br/>
            <span className='warn-span'>{this.state.signInStatus}</span><br/>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input><br/>
                <input type="password" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></input>
                
                <button className="login-btn" type="submit"><img src="../Images/login.png"/></button>
                <div className="register-text">Don't have an account?  <Link className = "signup-link" to='/SignUp'>Sign Up</Link></div>
            </form>
            </div>
        )
    }
}

export default Login;