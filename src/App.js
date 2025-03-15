import React  from "react"
import { BrowserRouter,Switch,Route } from "react-router-dom"

import Todos  from "./components/Todos/index"
import Register from "./components/Register/index"
import Login from "./components/Login/index"
const App=()=>{
 return  (<BrowserRouter>
 <Switch>
    <Route path="/todos" component={Todos} />
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login} />
 </Switch>
 
 </BrowserRouter>)
}

export default App