import React  from "react"
import {Component} from "react"
import cookies from "js-cookie"
import "./index.css"

class Register extends Component{
    state={username:"",password:"",Errormsg:""}

registerusername=event=>{
    this.setState({username:event.target.value})
}
registeruserpassword=event=>{
    this.setState({password:event.target.value})
}
onSubmitLoginSuccess=(jwtToken)=>{
    cookies.set("jwtToken",jwtToken,{expires:30})
        const {history}=this.props
        history.replace("/todos")    
}

onsubmitFailure=Errormsg=>{
    this.setState({Errormsg})
}


    onClickLogin=async (event)=>{
        event.preventDefault()
        const{username,password}=this.state
        const userdetails={username:username,password:password}
        const url="https://oscowl-1-houp.onrender.com/login"
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
        if(response.ok){
            
            this.onSubmitLoginSuccess(data.jwtToken)
        }else{
            this.onsubmitFailure(data.user)
        }
        
       
        this.setState({username:"",password:''})
    }

    render(){
        const {username,password,Errormsg}=this.state
        return <div className="register-container">
            <form className="form-container" onSubmit={this.onClickLogin}>
            <h1 className="create-account">LOGIN TO YOURACCOUNT</h1>
            <label>Username</label>
            <input value={username} type="text" placeholder="Username" onChange={this.registerusername}/>
            <label>Password</label>
            <input value={password} type="password" placeholder="password" onChange={this.registeruserpassword}/>
            <button type="submit" className="register-submit-button">submit</button>
            {Errormsg!=="" &&<p className="error-message">{Errormsg}</p>}
           <p className="msg-para">Don't have an account? <a className="login-link" href="/register">Register</a></p>
            </form>
            
            
        </div>


        
    }
}

export default Register