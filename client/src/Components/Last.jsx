import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
const Last = (props) => {
  let [state1,updateState1]=useState();
  let [state2,updateState2]=useState([]);
  let Restart =() =>{
    window.location.reload();
  }
  let findName=async()=>{
    let post=await axios.get(`/posts`)
    // console.log(post);
    // console.log(post.data[0].username);
    updateState1(post.data[0].username);
    // let val=await fetch('/posts',{
    //   method:"GET",
    //   headers:{"content-Type":"application/json"},
    // });
    // console.log(val);
  }
  let findAllposts=async()=>{
    let post=await axios.get(`/allposts`)
    // console.log(post);
    // console.log(post.data);
    updateState2(post.data);
  }
  useEffect(()=>{
    findName()
    findAllposts()
  },[])
  return (
    <div className='Start'>
      <div className='LastMain'>
        <div className='StartMaindata LastMaindata'>
          <h1>QUIZ APPLICATION</h1>
          <div className='LastMaindatabody'>

          </div>
          <div className='LastMaindata_section'>
            <div className='LastMaindata_section_part1'>
              <p>Name</p>
              <p>Total Quiz Points</p>
              <p>Total Questions</p>
              {/* <p>Total Attempts</p> */}
              <p>Total Earn Points</p>
              <p>Quiz Result</p>
            </div>
            <div className='LastMaindata_section_part2'>
              <p>{state1}</p>
              {/* // quizPoints, question, totalQuestions, earnPoints, result */}
              <p>{props.quizPoints}</p>
              <p>{props.question}</p>
              {/* <p>4</p> */}
              {/* <p>{props.totalQuestions}</p> */}
              <p>{props.earnPoints}</p>
              {/* <p>{props.result}</p> */}
              <p style={{"color":"green"}}> {props.result}</p>
            </div>
          </div>      
            <button style={{"marginBottom":"1%"}} id="StartQuiz" onClick={Restart} className='Restart'>Restart</button>
            {/* <NavLink to="/" className='Restart'>Restart</NavLink> */}
            <table border={'1px'}>
              <thead>
              <tr style={{"backgroundColor":"black"}}>
                <th>Name</th>
                <th>Attempts</th>
                <th>Earn Points</th>
                <th>Result</th>
              </tr>
              </thead>
              {state2.map((ele,ind)=>{
              return(<tbody key={ele._id}>
              <tr style={{"backgroundColor":"white","color":"black"}}>
                <td>{ele.username}</td>
                <td>Attempts</td>
                <td>{ele.earnPoints}</td>
                <td>{ele.result}</td>
              </tr>
              </tbody>)
              })}
            </table>
        </div>
        
      </div>
    </div>
  )
}

export default Last