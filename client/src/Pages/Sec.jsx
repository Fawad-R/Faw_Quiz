import axios from 'axios';
import React from 'react'
// import { createContext } from 'react';
// import { useContext } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import { context } from './Login';
const Sec = () => {
    // let newcontext= createContext();
    // let context1=useContext(context);
    // <newcontext.Provider value={context1}>
    //     <Navbar context1={context1} />
    // </newcontext.Provider>
    // context1?
    //   <h1>true</h1> :<h1>false</h1>
    // let Navigate= useNavigate()
    // let [state1,updateState1]=useState({email:"",password:""});
    // let name; 
    // let value; 
    // let inputEvent=(e)=>{
    //     name=e.target.name; 
    //     value=e.target.value; 
    //     updateState1({...state1,[name]:value})
    //     console.log('state1',state1);
    // }
    let submit = async(e) => {
        e.preventDefault();
        let val=await axios.get('/secret')
        // if (val.status===200) {
        //     Navigate('/');
        // }
        // else{
        //     Navigate('/register');
        // }
        // console.log(val);
        // console.log(val.status);
    }
    return (
        <>
            <input type="submit" onClick={submit} value="Submit" id='submit' />

 {/* <h1>  "context1"{context1}</h1>        */}
            {/* {console.log('context1',context1)} */}
        </>
    )
}

export default Sec;