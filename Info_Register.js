import React from "react";
import styles from "../style/Info_Register.module.css"
 import { useNavigate} from "react-router-dom";
 import Fani_image from "../style/Fani_image.png"

const Info_Register = () => {

const Route_Navigate = useNavigate()

    const Route_Back = () => {
        return Route_Navigate("/Register")
    }

    
    return (
        <div className= {styles.Modal}>
            <h1 id={styles.Title_student}>فرم ثبت نام دانشجویان </h1>

            <div className={styles.Info_Content}>
                <h3 id={styles.phone}>شماره تلفن</h3>
                <input type="tel"  placeholder="09101234879" className={styles.phone}/>

                <h3 id={styles.home_number}>شماره ثابت منزل</h3>
                <input  type="tel" placeholder="0211234567" className={styles.home_number}/>

                <h3 id={styles.Email}>آدرس الکترونیکی(ایمیل)</h3>
                <input  type="email" placeholder="exmple@gmail.com" className={styles.Email}/>

                <h3 id={styles.barthday}>تاریخ تولد</h3>
                <input type="text" placeholder="تاریخ تولد " className={styles.barthday}/>

                <h3 id={styles.parent_phoone}>شماره تلفن همراه والدین </h3>
                <input type="tel" placeholder="091212345678" className={styles.parent_phoone}/>
                <img id={styles.Fani_image} src={Fani_image}/>
                {/* <Link to= "./Register.js">بازگشت به صفحه ی اصلی</Link>  */}

                <button id={styles.SUB_student_Next} >اتمام ثبت نام</button>
                <button id={styles.SUB_student_Back} onClick={Route_Back}>مرحله قبلی</button>
                

                </div>            
            
            </div>

                
       
      
    ) 

}

export default Info_Register