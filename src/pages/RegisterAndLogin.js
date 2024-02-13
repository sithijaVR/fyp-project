import React, { useState } from "react";
import { database} from "./FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import './RegisterAndLogin.css';


function RegisterAndLogin(){
    const [login,setLogin]=useState(false)

    const history=useNavigate()

    
    const handleSubmit=(e,type)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        if (type==='Signup'){
            console.log("first")
        createUserWithEmailAndPassword(database,email,password).then(data=>{
                console.log(data,"authdata")
                history('/home')
        }).catch(err=>{
            alert(err.code)
            setLogin(true)
         })
    }else{
            signInWithEmailAndPassword(database,email,password).then(data=>{
                console.log(data,"authdata")
                history('/home')
             }).catch(err=>{
                alert(err.code)
             })
             }
            
            }

    
    return( 
        <div className="App">
        <div className="row">
            <div className={!login ? 'activecolor' : 'pointer'} onClick={() => setLogin(false)}>SignUp</div>
            <div className={login ? 'activecolor' : 'pointer'} onClick={() => setLogin(true)}>SignIn</div>
        </div>
        <h1>{login ? 'Signin' : 'SignUp'}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? 'Signin' : 'Signup')}>
            <input name="email" placeholder="Email" /><br />
            <input name="password" type="password" placeholder="Password" /><br />
            <button type="submit">{login ? 'Signin' : 'SignUp'}</button>
        </form>
    </div>
    
    )

 }
 export default RegisterAndLogin;