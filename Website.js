import React from "react";
import styles from "../style/WebSite.module.css"
import {Border_waves , Border_waves2} from "./Home page component/ShapeDivider";
import Logo_Register from "../style/logo_Register.png"
import { useNavigate } from "react-router-dom";
import Fani_Video from "../style/Fani_Video.mp4"
import { Teach_Card } from "./Cards";







const Website = () => {
    const navigate = useNavigate()
    
    const Handle_Register = () => {
        return navigate("/Register")
     }

    return (
        <div className={styles.main_Website}>
            <div className={styles.Box_Border}>
            <header>


                <div className={styles.Logo}>
                <a href="https://mftplus.com/">
                <img src="https://mftplus.com/theme/images/mftlogo.png" />
                </a>


                </div>
                <div className={styles.Logo_R} >
                    <img onClick={Handle_Register} src={Logo_Register} />
                </div>


                   
                        <li>
                        <a href="https://mftplus.com/departments">دپارتمان </a>
                        </li>
                        

                        <li >
                        <a href="https://mftplus.com/departments">تقویم اموزشی</a>
                        </li>
                        
                        <li >
                            <a   href="https://mftplus.com/departments">  تماس با ما</a>
                        </li>
                        
                        <li >
                        <a   href="https://mftplus.com/departments">  جذب مدرس</a>
                        </li>
                    

                
               
               

            </header>
            </div>
            
         
            <div className={styles.Container}>
            
           
                <div className={styles.Banner}>

                    <h2>مجتمع فنی ورامین</h2>

                    <div className={styles.image_size}>
                        <img>
                        
                        </img>
                    </div>

                </div>
                 {/* Banner */}
                 <Border_waves />

                <div className={styles.I_Video}>

                   <h2>معرفی مجمتع فنی تهران </h2>
                   <video controls>
                    <source src={Fani_Video}></source>
                   </video>
                   </div>
                   <Border_waves2 />
                   <div className={styles.Card_WebSite}>
                   <Teach_Card Title = "زبان انگلیسی "/>
                   <Teach_Card Title="برنامه نویسی پایتون"/>
                   <Teach_Card  Title = "حسابداری "/>
                   </div>
                 

            </div>

          


        </div>
    )
}

export default Website