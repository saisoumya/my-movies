import React,{Component} from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
import { firebaseApp } from '../config/firebase';

export default class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            email:"",
            usernameWarnText:"",
            pwdWarnText:"",
            emailWarnText:"",
            dateWarnText:"",
            selectedDate:new Date(),
            isPwdValid:false,
            isEmailValid:false,
            isUsernameValid:false,
            signUpStatus:""
        }
        this.userRef = React.createRef();
    }

    componentDidMount(){
        this.userRef.current.focus();
    }

    validateUserName=(e)=>{
        let re=/^[a-zA-Z0-9_][a-zA-Z]+[0-9]*$/;
        const username = e.target.value;
        let usernameWarnText ="";
        let isUsernameValid = true;
        if(!re.test(String(username).toLowerCase())){
            usernameWarnText =  "Username can contain only alphabets,digits and '_'"; isUsernameValid = false;
        }
        if(username.length<6) {usernameWarnText+=" Minimum length is 6 characters"; isUsernameValid=false;}
        if(username.length>16) {usernameWarnText+=" Maximum length is 16 characters"; isUsernameValid=false;}
        
        this.setState((prevState)=>({usernameWarnText,isUsernameValid}))
    }

    validateEmail=(e)=>{
        let emailWarnText = "";
        let isEmailValid = true;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(e.target.value)){
            emailWarnText = "Please enter a valid email";
            isEmailValid = false;
        }
        this.setState((prevState)=>({emailWarnText,isEmailValid}))
    }

    validatePassword=(e)=>{
        const password = e.target.value;
        let re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let pwdWarnText = "";
        let match = re.test(password);
        let isPwdValid=true;
        if(!match){
            isPwdValid=false;
           if(!(/(?=.*[0-9])/).test(password)) pwdWarnText+="Password should contain atleast one digit.";
           if(!(/(?=.*[!@#$%^&*])/).test(password)) pwdWarnText+="Password should contain atleast one special character.";
           if(!(/[a-zA-Z0-9!@#$%^&*]/).test(password)) pwdWarnText+="Password should contain atlest one alphabet";
           if(password.length<6) pwdWarnText+="Minimum length for password is 6";
           if(password.length>16) pwdWarnText+="Maximum length for password is 16";
        }
        this.setState((prevState)=>({pwdWarnText,isPwdValid}));
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        if(this.state.isEmailValid&&this.state.isPwdValid&&this.state.isUsernameValid){
            firebaseApp.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(()=>{
                console.log("Signup success");
                this.props.history.push('/home');
            }).catch((err)=>{
                console.log("Signup failed");
                this.setState({signUpStatus:err.message});
            })
            
        }
    }
    render(){
        return (
            <div className="sign-up-div">
            <span className='warn-span'>{this.state.signUpStatus}</span><br/>
                <img src="../Images/user.png" alt="user.png"></img><br/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref = {this.userRef} onBlur={this.validateUserName} placeholder="Username" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></input><br/>
                    <span className="warn-span">{this.state.usernameWarnText}</span><br/>
                    <input type="text" onBlur={this.validateEmail} placeholder="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input><br/>
                    <span className="warn-span">{this.state.emailWarnText}</span><br/>
                    <input type="password" placeholder="Password" onBlur={this.validatePassword} value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></input><br/>
                    <span className="warn-span">{this.state.pwdWarnText}</span><br/>
                    <DatePicker selected={this.state.selectedDate} onChange={(date)=>{this.setState({selectedDate:date})}}></DatePicker><br/>                  
                    <span className="warn-span">{this.state.dateWarnText}</span><br/>
                    <button className="signup-btn" type="submit"><img src="../Images/signup.png"/></button>
                </form>
            </div>
        )
    }
}