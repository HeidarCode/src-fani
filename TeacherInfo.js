import React from "react";
import styles from "../style/TeacherInfo.module.css"
 import { Link , useNavigate } from "react-router-dom";
 import Fani_image from "../style/Fani_image.png"

const TeacherInfo = () => {
    const Route_Navigate = useNavigate()

    const Route_Back = () => {
        return Route_Navigate("/Register")
    }

    return (
        <div className= {styles.Modal}>
            <h1 id={styles.Title_teacher}>فرم ثبت نام اساتید</h1>

            <div className={styles.Info_Content}>
                <h3 id={styles.phone}>شماره تلفن</h3>
                <input type="tel"  placeholder="09101234879" className={styles.phone}/>


                <h3 id={styles.Email}>آدرس الکترونیکی(ایمیل)</h3>
                <input  type="email" placeholder="exmple@gmail.com" className={styles.Email}/>

                <h3 id={styles.barthday}>تاریخ تولد</h3>
                <input type="text" placeholder="تاریخ تولد " className={styles.barthday}/>

                <h3 id={styles.Bank_Numbers}>شماره شبا حساب بانکی</h3>
                <input type="tel" placeholder="5892101379606888" className={styles.Bank_Numbers}/>
                {/* <Link to= "./Register.js">بازگشت به صفحه ی اصلی</Link>  */}
                <img id={styles.Fani_image} src={Fani_image}/>

                <button id={styles.SUB_Teacher_Next}>اتمام فرایند ثبت نام</button>
                <button id={styles.SUB_Teacher_Back} onClick={Route_Back}>مرحله قبلی </button>

                </div>            
            
            </div>

                
       
      
    ) 

}

export default TeacherInfo