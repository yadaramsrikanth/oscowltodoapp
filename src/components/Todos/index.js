import React from "react";
import { Component } from "react";
import cookies from "js-cookie"
import "./index.css"

class Todos extends Component{
    state={todolist:[]}

getTodosdata=async()=>{
    const jwtToken=cookies.get("jwtToken")
    //console.log(jwtToken)
    const url="https://oscowl-1-houp.onrender.com/todos"
    const options={
        method:"GET",
        headers:{
            Authorization:`Bearer ${jwtToken}`,
        }
    }
    const response=await fetch(url,options)
    //console.log(response)
    const data=await response.json()
    console.log(data)
    this.setState({todolist:data})
}

componentDidMount(){
    this.getTodosdata()
}

    render(){
        const {todolist}=this.state
        console.log(todolist)
        return <div className="todos-container">
            <h1 className="todos-heading">TODOS</h1>
          {
            todolist.map(item=>(
                <p></p>
            ))
          }
        </div>
    }
}

export default Todos