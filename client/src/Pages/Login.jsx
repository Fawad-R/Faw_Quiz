import axios from 'axios';
import React from 'react'
import { createContext } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import App, { latestContext } from '../App';
import Navbar from '../Components/Navbar';
import Sec from './Sec';
// let disValue;
// let context= createContext();
const Login = () => {
    let {latestState,dispatchlatestState}= useContext(latestContext);
    // let disValue;
    // const [newstate,]=useReducer
    // let initialState;
    // let reducer=(newstate,dispatch)=>{
    // //    if(action.type=='complete')
    //    if(dispatch.type=='complete')
    //    {
    //     return dispatch.type;
    //    } 
    // }

    // ->create context
    // ->context.provider
    // ->use context

    
    // const [newstate, dispatch] = useReducer(reducer, initialState)
    let Navigate= useNavigate()
    let [state1,updateState1]=useState({email:"",password:""});
    // let [state2,updateState2]=useState(false);
    let name; 
    let value; 
    let inputEvent=(e)=>{
        if(e.target.name==='email')
        {
            name=e.target.name; 
            value=e.target.value.toLowerCase(); 
            updateState1({...state1,[name]:value})
        }
        else{
        name=e.target.name; 
        value=e.target.value; 
        updateState1({...state1,[name]:value})}
    }
    
    let submit = async(e) => {
        e.preventDefault();
        let {email,password}=state1;
        // console.log('email',email);
        // console.log('password',password);
        let val=await fetch('/login/login',{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
        if (val.status===200) {
        let value=await axios.get(`/user/user/${email}`);
        dispatchlatestState({type:"true",payload:true});
        // localStorage.setItem('user',JSON.stringify(value.data._id))
        localStorage.setItem('initialState',JSON.stringify(true));
        Navigate('/');
        // updateState2(true);
        // disValue = true;
            // ,payload
            // setTimeout(() => {
            // }, 1000);
        }
        else{
            alert('Error! wrong email and password')
            // Navigate('/register');
            // disValue = false;
        }
        // console.log(val);
        // console.log(val.status);

    }
    return (
        <>
            <div className='Register0'>
                <div className='Register'>
                    <form action="" method="post">
                        <h1>Login</h1>
                        <input onChange={inputEvent} placeholder="email" type="email" name="email" id="email" required />
                        <input onChange={inputEvent} placeholder="password" type="password" name="password" id="password" />
                        <input type="submit" onClick={submit} value="Submit" id='submit' />
                        {/* <NavLink to="" >  </NavLink>  */}
                    </form>
                </div>
            </div>
            {/* state hun jigr: {newstate} */}
    {
     }
        </>
    )
}

export default Login;
// export {context}