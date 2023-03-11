import axios from 'axios';
import React from 'react'
import { useContext,useEffect } from 'react';
import { useReducer } from 'react';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
// import { context } from '../Pages/Login';
import { latestContext } from '../App';
// latestContext
const Navbar = () => {
   let Navigate=useNavigate();
   // let initialState=true;
   // console.log('latestContext',latestContext);
   let {latestState,dispatchlatestState}= useContext(latestContext);
   // let reducer=(newstate,dispatch)=>{
   //    if(dispatch.type==true)
   //    {
   //       return true;
   //    }
   // }

   // const[newstate,dispatch]=useReducer(reducer,context1);
   // useEffect(()=>{
   //    console.log('trigered');
   //    console.log(context1);
   //    updateState2(context1)
   //       },[context1])
         // },[dispatch])

   let [state,updateState]=useState(false);
   // let [state2,updateState2]=useState(false);
   let Logout = async (e) => {
      // e.preventDefault()
      let val = await axios.get('/logout');
      // console.log(val);
      if(val.status==200)
      {
         localStorage.setItem('user',JSON.stringify(null));
         localStorage.setItem('initialState',JSON.stringify(null));
         updateState(true);
         alert('You have logged out!')
         Navigate('/login');
      }
      else
      {
         alert('Please login first');
      }
   }
   return (
      <>
      {/* {context1?  */}
      {/* {context1==true?  */}
      {
      // state2? 
      // latestState?
      // <h1>true</h1> :<h1>false</h1>
      latestState?
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <div className="logo"><a to="/"><img src="images/logo.png" /></a></div> */}

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  {/* <li className="nav-item">
                     <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li> */}
                  <li className="nav-item">
                  <a className="nav-link" href="/login"  onClick={Logout}>Logout</a>
                     {/* <NavLink className="nav-link" to="/login">Login</NavLink> */}
                  </li>
               </ul>
            </div>
         </nav>
         :
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <div className="logo"><a to="/"><img src="images/logo.png" /></a></div> */}

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
               {/* active */}
                  <li className="nav-item ">
                     <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                     {/* <NavLink className="nav-link" to="/login" onClick={Logout}>Logout</NavLink> */}
                     <NavLink className="nav-link" to="/login">Login</NavLink>
                     
                  </li>
               </ul>
            </div>
         </nav>
      }
      {/* newstate hun jgr: {newstate}
      context1 hun jgr: {context1}
      { console.log('context1',context1)} */}
      </>

   )
}

export default Navbar