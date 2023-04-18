import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/Home/Home";
import { Singup } from "../components/SingUp/Signup";
import{auth} from "../firebase";
import { useEffect, useState } from "react";

export function MyRoutes() {
  const[userName,setUserName]=useState([]);
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("")
    })
  },[])
  return (

    <Router>
        <Routes>
            <Route exact path="/" element={<Home name={userName}></Home>}></Route>
            <Route exact path="/login" element={<Login></Login>}></Route>
            <Route exact path="/singup" element={<Singup></Singup>}></Route>
        </Routes>
    </Router>
  );
}
