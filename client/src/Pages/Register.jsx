import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let Navigate= useNavigate();
    let [state1,updateState1]=useState({email:"",username:"",password:"",cpassword:""});
    let name; 
    let value; 
    let inputEvent=(e)=>{
        if(e.target.name==='email')
        {
            name=e.target.name; 
            value=e.target.value; 
            updateState1({...state1,[name]:value.toLowerCase()})
        }
        else{
        name=e.target.name; 
        value=e.target.value; 
        updateState1({...state1,[name]:value})}
    }
    let submit = async(e) => {
        e.preventDefault();
        let {email,username,password,cpassword}=state1;
        let val=await fetch('/reg/reg',{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({email,username,password,cpassword})
        })
        // console.log(val);
        try {
            
            if(val.status===200)
            {
                alert("Sucessfully registered! You can login here")
                Navigate('/login');
            }
            else
            {
                alert("sorry can't proceed at the moment")
                // Navigate('*');
            }
        } catch (error) {
            alert(error)
            
        }
    }
    return (
        <>
            <div className='Register1'>
                <div className='Register'>
                    <form action="" method="post">
                        <h1>Register Your Account</h1>
                        <input onChange={inputEvent} placeholder="email" type="email" name="email" id="email" required />
                        {/* <input type="text" required/> */}
                        <input onChange={inputEvent} placeholder="username" type="text" name="username" id="username" />
                        <input onChange={inputEvent} placeholder="password" type="password" name="password" id="password" />
                        <input onChange={inputEvent} placeholder="confirm password" type="password" name="cpassword" id="cpassword" />
                        <input type="submit" onClick={submit} value="Submit" id='submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register