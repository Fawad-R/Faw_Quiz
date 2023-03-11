import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="location_main">
               <div className="location_text"><img src="images/map-icon.png"/><span className="padding_left_10"><a href="#">Islamabad</a></span></div>
               <div className="location_text center"><img src="images/call-icon.png"/><span className="padding_left_10"><a href="#">Call ; +92 3447328858</a></span></div>
               <div className="location_text right"><img src="images/mail-icon.png"/><span className="padding_left_10"><a href="#">fawadrahman55@gmail.com</a></span></div>
            </div>
            <div className="footer_section_2">
               <div className="row">
                  <div className="col-lg-4">
                     <h2 className="footer_taital">About</h2>
                     <p className="footer_text">I am fawad, MERN stack web developer. If you want full stack user friendly websites then mail me.  </p>
                  </div>
                  {/* <div className="col-lg-4">
                     <h2 className="footer_taital">Services Link</h2>
                     <p className="footer_text">There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav</p>
                  </div> */}
                  <div className="col-lg-4">
                     <h2 className="footer_taital">Subscribe</h2>
                     {/* <input type="text" className="Enter_text" placeholder="Enter Your Email" name="Enter Your Email"/> */}
                     {/* <div className="subscribe_bt"><a href="#">Subscribe</a></div> */}
                     <div className="social_icon">
                        <ul>
                           <li><a target="_blank" href="https://m.facebook.com/111808434954519/"><img src="images/fb-icon.png"/></a></li>
                           <li><a target="_blank" href="https://twitter.com/ParhloFawad?t=4MwmqJGdKo5EWE7aQCRpkA&s=09"><img src="images/twitter-icon.png"/></a></li>
                           <li><a target="_blank" href="https://www.linkedin.com/in/fawad-rehman-035135210"><img src="images/linkedin-icon.png"/></a></li>
                           <li><a target="_blank" href="https://www.instagram.com/sitesguru/?hl=en"><img src="images/instagram-icon.png"/></a></li>
                           <li><a target="_blank" href="https://youtube.com/@fawadrehman114"><img src="images/youtub-icon.png"/></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <div className="copyright_section">
            <div className="container">
               <p className="copyright_text">Copyright 2022 All Rights Reserved</p>
            </div>
         </div> */}
      {/* <!-- footer section end --> */}   
    </>
  )
}

export default Footer