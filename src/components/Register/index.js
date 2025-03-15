import React,{Component} from "react"
//import {useNavigate} from "react-router-dom"
import "./index.css"

class Register extends Component{
    state={username:"",password:"",errorMsg:""}

registerusername=event=>{
    this.setState({username:event.target.value})
}
registeruserpassword=event=>{
    this.setState({password:event.target.value})
}

onSubmitSuccess=()=>{
   const {history} =this.props
   history.replace("/login")
}

    onClickregister=async (event)=>{
        event.preventDefault()
        const{username,password}=this.state
        const userdetails={username:username,password:password}
        const url="https://oscowl-1-houp.onrender.com/register"
        const options={
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userdetails)
        }
        
        const response=await fetch(url,options)
        console.log(response)
        const data=await response.json()
        console.log(data)
        if (response.ok){
            this.onSubmitSuccess()
        }
        
       
        this.setState({errorMsg:data.user,username:"",password:''})
    }

    render(){
        const {errorMsg,username,password}=this.state
        return <div className="register-container">
            <form className="form-container" onSubmit={this.onClickregister}>
            <h1 className="create-account">CREATE ACCOUNT</h1>
            <label>Username</label>
            <input value={username} type="text" placeholder="Username" onChange={this.registerusername}/>
            <label>Password</label>
            <input value={password} type="password" placeholder="password" onChange={this.registeruserpassword}/>
            <button type="submit" className="register-submit-button">submit</button>
            {errorMsg!==""&&<p className="error-message">{errorMsg}</p>}
           <p className="msg-para">Already have an account? <a className="login-link" href="/login">Login</a></p>
            </form>
            
            
        </div>


        
    }
}

export default Register