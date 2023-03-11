import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Questions from './Questions';
// import '../../public/images'

const Start = () => {
   let Navigate = useNavigate();
   let [state1, updateState] = useState('');
   let [state2, updateState2] = useState();
   let [state3, updateState3] = useState(false);
   let inputEvent = (e) => {
      updateState(e.target.value)
      // console.log(e.target.value);
   }
   let StartQuiz = async (e) => {
      e.preventDefault();
      updateState2(state1);
      // let val=await axios.post('/');
      let username = state1;
      let val = await fetch('/anew', {
         method: "POST",
         headers: { "content-Type": "application/json" },
         body: JSON.stringify({ username }),
      });
      // console.log(state2);
      // console.log(state1);
      // console.log(username);
      // console.log(val);
      if (val.status === 200) {
         updateState3(true);
      }
      else {
         alert('Please login first to further proceed')
         Navigate('login')
      }
   }
   // let Logout = async (e) => {
   //    // e.preventDefault()
   //    let val = await axios.get('/logout');
   //    console.log(val);
   // }
   return (
      <>

         <div className="header_section">
            {/* <!--banner section start --> */}
            <div className="banner_section layout_padding">
               <div className="container-fluid">
                  <section className="slide-wrapper" />
                  <div className="container-fluid">
                     <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                           <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                           <li data-target="#myCarousel" data-slide-to="1"></li>
                           {/* <li data-target="#myCarousel" data-slide-to="2"></li> */}
                           {/* <li data-target="#myCarousel" data-slide-to="3"></li>
                           <li data-target="#myCarousel" data-slide-to="4"></li> */}
                        </ol>
                        {/*  */}
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <div className="container">
                                 <div className="banner_main">
                                    <h1 className="banner_taital">Quiz App</h1>
                                    <p className="banner_text">Application is developed to provide users with a fun and interactive way to test their knowledge on a particular topic or subject.</p>
                                    {/* <h1 className="banner_taital">Fawad Rehman</h1>
                                    <p className="banner_text">I am a mern stack web developer and have a deep knowledge of javascript. If you want wonderful websites then contact here.</p> */}
                                    <div className="btn_main">
                                       <div className="contact_bt active "><a href="https://twitter.com/ParhloFawad?t=4MwmqJGdKo5EWE7aQCRpkA&s=09">Contact Us</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* </section> */}
               </div>
            </div>
            {/* <!--banner section end --> */}
         </div>
         {/* <!--about section start --> */}
         {state3 ? <Questions /> :      
         <div className="about_section layout_padding">
            <div className="container">
               <h1 className="about_taital" style={{"color":"white"}}>Quiz APP</h1>
               <p className="about_text" style={{"color":"white"}}>It consist of a series of multiple-choice questions, and users are required to select the correct answer from a list of options.</p>
               {/* <p className="about_text" style={{"color":"white"}}>I am a mern stack web developer and have a deep knowledge of javascript. If you want wonderful websites then contact here.</p> */}
               <div className="about_section_2">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="about_image"><img src="images/6.jpg" /></div>
                     </div>
                     <div className="col-lg-6">
                        <div className="about_taital_main latestStart">
                           {/* <p className="lorem_text">
                           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p> */}
                           {/* <div className='Start'> */}
                           <ol type='1' style={{"color":"white"}} >
                              <li>1. You will be asked 10 Questions one after another</li>
                              <li>2. 10 Points will be awarded for correct questions</li>
                              <li>3. You can select only one option</li>
                              <li>4. Before finishing, you can review and change answers</li>
                              <li>5. Result will be declared at the end of quiz</li>
                           </ol>
                           <form action="" method='POST'>
                        <input type="text" name="username" id="username" value={state1} placeholder='username' onChange={inputEvent} />
                        <NavLink to='/question' type="submit" id='StartQuiz' onClick={StartQuiz} >Start Quiz </NavLink>
                        {/* <NavLink to='' style={{"marginTop":"5%"}} type="submit" id='StartQuiz' onClick={Logout} >logout </NavLink> */}
                     </form>

                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      }

         <div className="copyright_section">
            <div className="container">
               <p className="copyright_text">Copyright &#169; 2023 All Rights Reserved</p>
            </div>
         </div>
      </>

   )
}

export default Start;