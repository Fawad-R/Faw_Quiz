import axios from 'axios'
import React from 'react'
import {useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from './Data'
import Last from './Last'
let id = 0;
let score = 0;
let quizPoints = 0;
let earnPoints = 0;
let totalQuestions = 0;
let Attempts = 0;
let result;
// let quizResult
// let sec=50;
let sec=5;
const Questions = () => {
  let [state, updateState] = useState(Data[id]);
  let [state2, updateState2] = useState();
  let [state3, updateState3] = useState(false);
  let [state4, updateState4] = useState();
  let [state5, updateState5] = useState({quizPoints:"", question:"", totalQuestions:"", earnPoints:"", result:""});
  let [state6, updateState6] = useState(5);
  let [state7, updateState7] = useState(false);
  let selectedID = (value) => {
    // e.preventDefault();
    // console.log('selectedID:', value); 
    updateState2(value);
    // console.log('state2 in selected',state2);
    // window.stop();
  }
  // useEffect(() => {
  //       const interval = setInterval(() => {
  //         console.log('This will run every second!');
  //         sec--;
  //    console.log(sec);
  //    if (sec===0) {
  //      updateState7(true);
  //      if (id === Data.length - 1) {
  //     console.log('id === Data.length - 1:', Data.length - 1,id);
  //     if (state.correct === state2) {
  //       score++;
  //       earnPoints += 10
  //       console.log('score', score);
  //       console.log('earnPoints', earnPoints);
  //     }
  //     id = id + 1;
  //     totalQuestions = totalQuestions + 1;
  //     quizPoints = quizPoints + 10;
  //     console.log('totalQuestions', totalQuestions);
  //     console.log('quizPoints', quizPoints);
  //     console.log('id', id);
  //     if (earnPoints >= 30) {
  //       result = "passed";
  //     }
  //     else {
  //       result = "Failed";
  //     }
  //     let question = totalQuestions;
  //        async function findName()
  //         {
  //         let post=await axios.get(`/posts`)
  //         console.log('state4',state4);
  //         updateState4(post.data[0]._id);
  //         console.log('state4',state4);
  //         console.log(post);
  //         console.log(post.data[0]._id);
  //         let val = await fetch(`/${post.data[0]._id}`, {
  //           method: "POST",
  //           headers: { "content-Type": "application/json" },
  //           body: JSON.stringify({ quizPoints, question, totalQuestions, earnPoints, result })
  //         });
  //         console.log(val);
  //         updateState5({quizPoints:quizPoints, question:question, totalQuestions:totalQuestions, earnPoints:earnPoints, result:result})
  //     }
  //     findName();
  //     updateState3(true);
  //     console.log("LAST");
  //   }
  //   else {
  //     if (state.correct === state2) {
  //       score++;
  //       earnPoints += 10;
  //       console.log('score', score);
  //       console.log('earnPoints;', earnPoints);
  //     }
  //     id = id + 1;
  //     totalQuestions = totalQuestions + 1;
  //     quizPoints = quizPoints + 10;
  //     console.log('totalQuestions', totalQuestions);
  //     console.log('quizPoints', quizPoints);
  //     console.log('id', id);
  //     updateState(Data[id]);

  //   }
  //      return clearInterval(interval)
  //       }
  //     }, 1000);
  //       return () => clearInterval(interval);
  //     }, [id]);
      
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('This will run every second!');
//       sec--;
//  console.log(sec);
//  if (sec===0) {
  
//     if (id === Data.length - 1) {
//            console.log('ruk ja bsdk');
//             console.log('id',id);
//             console.log('stateid',state.id);
//               console.log('state.correct',state.correct);
//               console.log('state2',state2);
//               if (state.correct === state2) {
//                 score++;
//                 earnPoints += 10;
//                 console.log('score', score);
//                 console.log('earnPoints;', earnPoints);
//               }
//               totalQuestions = totalQuestions + 1;
//               quizPoints = quizPoints + 10;
//               sec=5;
//               updateState3(true);
//             }
//            else
//            {
//             console.log('ruk ja bsdk');
//             id++;
//             updateState(Data[id]);
//             console.log('id',id);
//             console.log('stateid',state.id);
//               console.log('state.correct',state.correct);
//               console.log('state2',state2);
//               if (state.correct === state2) {
//                 score++;
//                 earnPoints += 10;
//                 console.log('score', score);
//                 console.log('earnPoints;', earnPoints);
//               }
//               totalQuestions = totalQuestions + 1;
//               quizPoints = quizPoints + 10;
//               sec=5;
          
//            } 
//    return clearInterval(interval)
//     }
//   }, 1000);
//     return () => clearInterval(interval);
//   }, [id]);
  
  
  let SubmitFunc = (e) => {
    e.preventDefault();
    // console.log(state.correct);
    // console.log(state2);
    if (id === Data.length - 1) {
      console.log('id === Data.length - 1:', Data.length - 1,id);
      if (state.correct === state2) {
        score++;
        earnPoints += 10
        // console.log('score', score);
        // console.log('earnPoints', earnPoints);
      }
      id = id + 1;
      totalQuestions = totalQuestions + 1;
      quizPoints = quizPoints + 10;
      // console.log('totalQuestions', totalQuestions);
      // console.log('quizPoints', quizPoints);
      // console.log('id', id);
      if (earnPoints >= 30) {
        result = "passed";
      }
      else {
        result = "Failed";
      }
      let question = totalQuestions;
         async function findName()
          {
          let post=await axios.get(`/posts`)
          // console.log('state4',state4);
          updateState4(post.data[0]._id);
          // console.log('state4',state4);
          // console.log(post);
          // console.log(post.data[0]._id);
          let val = await fetch(`/anew/${post.data[0]._id}`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ quizPoints, question, totalQuestions, earnPoints, result })
          });
          // console.log(val);
          updateState5({quizPoints:quizPoints, question:question, totalQuestions:totalQuestions, earnPoints:earnPoints, result:result})
      }
      findName();
      updateState3(true);
      // console.log("LAST");
    }
    else {
      if (state.correct === state2) {
        score++;
        earnPoints += 10;
        // console.log('score', score);
        // console.log('earnPoints;', earnPoints);
      }
      id = id + 1;
      totalQuestions = totalQuestions + 1;
      quizPoints = quizPoints + 10;
      // console.log('totalQuestions', totalQuestions);
      // console.log('quizPoints', quizPoints);
      // console.log('id', id);
      updateState(Data[id]);

    }
  }
  
  return (
    <>
      {
      // state3 ? <Last quizPoints={state5.quizPoints} question={state5.question} totalQuestions={state5.totalQuestions} earnPoints={state5.earnPoints} result={state5.result} /> :
      //   <div className='Start'>
      //     <div className='StartMain'>
      //       <div className='StartMaindata'>
      //         <h1>QUIZ APPLICATION</h1>
      //    <h1>{state6}</h1> 
      //         {score}
      //           <form action="" method='POST' className='QuestionForm'>
      //           {console.log(state)}
      //           <p>{state.question}</p>
      //           {/* <p>{Data[id].question}</p> */}
      //           <div>
      //             <input type="radio" name="option1" id="a" onClick={() =>{ selectedID('a')}} />
      //             {/* <label htmlFor="a">{Data[id].a}</label> */}
      //             <label htmlFor="a">{state.a}</label>
      //           </div>
      //           <div>
      //             <input type="radio" name="option1" id="b" onClick={() => selectedID('b')} />
      //             {/* <label htmlFor="b">{Data[id].b}</label> */}
      //             <label htmlFor="b">{state.b}</label>
      //           </div>
      //           <div>
      //             <input type="radio" name="option1" id="c" onClick={() => selectedID('c')} />
      //             {/* <label htmlFor="c">{Data[id].c}</label> */}
      //             <label htmlFor="c">{state.c}</label>
      //           </div>
      //           <input onClick={SubmitFunc} type="submit" id='Next' value="Next" />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
}
          {/* <!--about section end --> */}
          {state3 ? <Last quizPoints={state5.quizPoints} question={state5.question} totalQuestions={state5.totalQuestions} earnPoints={state5.earnPoints} result={state5.result} /> :
      <div className="services_section layout_padding">
      <div className="container">
         <h1 className="services_taital">Quiz App</h1>
         {/* <p className="about_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum quidem ea? Laborum, obcaecati!</p> */}
         <div className="services_section_2">
            <div className="row">
               {/* <div className="col-lg-4">
                  <div className="icon_box">
                     <div className="icon_1"><img src="images/icon-1.png"/></div>
                  </div>
                  <h4 className="selection_text">Selection of Business</h4>
                  <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
                  <div className="icon_box">
                     <div className="icon_1"><img src="images/icon-4.png"/></div>
                  </div>
                  <h4 className="selection_text">Securities Transactions</h4>
                  <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
               </div>
               <div className="col-lg-4">
                  <div className="icon_box">
                     <div className="icon_1"><img src="images/icon-2.png"/></div>
                  </div>
                  <h4 className="selection_text">Research and Analytics</h4>
                  <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
                  <div className="icon_box">
                     <div className="icon_1"><img src="images/icon-5.png"/></div>
                  </div>
                  <h4 className="selection_text">Advisory Activities</h4>
                  <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
               </div>
               <div className="col-lg-4">
                  <div className="icon_box">
                     <div className="icon_1"><img src="images/icon-3.png"/></div>
                  </div>
                  <h4 className="selection_text">Business Plans</h4>
                  <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
                  <div className="icon_box">
                     <div className="icon_1"><img src="images/icon-6.png"/></div>
                  </div>
                  <h4 className="selection_text">Management and Asset</h4>
                  <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or randomised</p>
               </div> */}
                
        <div className='QuizFormNewClass'>
          {/* Start */}
          <div className=''>
          {/* StartMain */}
            <div className=''>
            {/* StartMaindata */}
              {/* <h1>QUIZ APPLICATION</h1>
         <h1>{state6}</h1> 
              {score} */}
              {/* QuestionForm */}
                <form action="" method='POST' className=''>
                {/* {console.log(state)} */}
                <p>{state.question}</p>
                {/* <p>{Data[id].question}</p> */}
                <div>
                  <input type="radio" name="option1" id="a" onClick={() =>{ selectedID('a')}} />
                  {/* <label htmlFor="a">{Data[id].a}</label> */}
                  <label htmlFor="a">{state.a}</label>
                </div>
                <div>
                  <input type="radio" name="option1" id="b" onClick={() => selectedID('b')} />
                  {/* <label htmlFor="b">{Data[id].b}</label> */}
                  <label htmlFor="b">{state.b}</label>
                </div>
                <div>
                  <input type="radio" name="option1" id="c" onClick={() => selectedID('c')} />
                  {/* <label htmlFor="c">{Data[id].c}</label> */}
                  <label htmlFor="c">{state.c}</label>
                </div>
                <input onClick={SubmitFunc} type="submit" id='Next' value="Next" />
              </form>
            </div>
          </div>
        </div>         
            </div>
         </div>
      </div>
   </div>
  }
  {/* } */}
   </>
  )
}

export default Questions