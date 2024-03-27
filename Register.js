import React , {useRef, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

import "../style/Register.css"



import Fani_Organaze from "../style/image.png"
// import { Jwt } from "jsonwebtoken"
import Info from "./Info_Register"
import Info_Register from "./Info_Register"


const Register = ({}) => {
 const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
 };
 const handleSignInClick = () => {
  setIsSignUp(false)
 }

 const Info_teacher = "0410848107"
 const InputValue = useRef()
 const navigate = useNavigate()

 const true_val = () => {
  
  if(InputValue.current.value === Info_teacher) {
    return navigate('/Teacher')
  }
  else {
    return navigate('/student')
  }
  
  
 }


  
  return (
    <div className="main_Register">
    
     <div className={`container ${isSignUp ? 'right-panel-active' : ''} `}>
       <div className="form-container sign-up-container">
         <form>
           <h1>ساخت حساب کاربری </h1>
         
          <input type="text" name="نام" placeholder="نام" />
          <input type="text" name="نام خانوادگی" placeholder="نام خانوادگی" />
        <input type="text" name="کد ملی " placeholder="کد ملی"  ref={InputValue}/>




        
        <button onClick={true_val}>صفحه ی بعدی  </button>
        
        
       


          
        </form>
        
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <img  src={Fani_Organaze}/>
          <h1>ورود</h1>
        
          <input type="text" name="کد ملی" placeholder="کدملی" />
          <input type="password" name="password" placeholder="رمز عبور" />
          <a href="#">آیا رمز عبور خود را فراموش کرده اید  ؟</a>
          <button>ورود </button>
        </form>
       </div>
       <div className="overlay-container">
         <div className="overlay">
           <div className="overlay-panel overlay-left">
             <h1> !سلامی دوباره </h1>
             <p>برای ورود به  حساب کاربری خودت کلیک کن </p>
             <button className="ghost" onClick={handleSignInClick} >ورود</button>
           </div>
           <div className="overlay-panel overlay-right">
             <h1>سلام دانشجوی عزیز </h1>
             <p>برای شرکت در دوره هادر سایت ثبت نام کن</p>
           <button className="ghost" onClick={handleSignUpClick}>ثبت نام </button>
           </div>
         </div>
       </div>
     </div>
     </div>
  );
  
        


  
        }



export default Register



    // <a href="http://localhost8080/Info_Register.js" style={{color : "#FFFFFF",}}>رفتن به مرحله بعد</a>