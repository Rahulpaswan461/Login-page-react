import React, { useState } from 'react'
import './LoginSyle.css'

import user_icon from '../Assets/Assets/person.png'
import email_icon from '../Assets/Assets/email.png'
import password_icon from '../Assets/Assets/password.png'
//  const Login = () => {

//     const [action,setAction]=useState("Sign Up")
//   return ( 
//     <div>
//         <div className="container">
//             <div className="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action ==="Login" ? <div></div> :  <div className="input">
//                     <img src={user_icon}></img>
//                     <input type="text" placeholder="Enter your user name"/>

//                 </div>}
              
//                 <div className="input">
//                     <img src={email_icon}></img>
//                     <input type="email" placeholder="Enter your email"/>
                    
//                 </div>
//                 <div className="input">
//                     <img src={password_icon}></img>
//                     <input type="password" placeholder="At leaset 8 characters"/>
                    
//                 </div>
//             </div>
//             {action ==="Sign Up" ?<div></div>:  <div className="forgot-password">Lost Password ? <span>Click Here !</span></div>}
          
//             <div className="submi-container">
//                 <div className={action==="Login" ? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//                 <div className={action==="Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//             </div>
//         </div>
//     </div>
//   )
// }

const Login=()=>{
    const [action,setAction]=useState("Sign Up")
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
               
                <div className="inputs">
                {action ==="Login" ? <div></div> :  <div className="input">
                     <img src={user_icon}></img>
                     <input type="text" placeholder="Enter your user name"/>

                 </div>}
                  
                    <div className="input">
                        <img src={email_icon}></img>
                        <input type="email" placeholder='Enter Your Email'/>
                    </div>
                    <div className="input">
                        <img src={password_icon}></img>
                        <input type="password" placeholder='At least 8 characters'/>
                    </div>
                </div>
                {action ==="Sign Up" ? <div></div> : <div className="forgot-passowrd">Lost Password ? <span>Click Here !</span></div> }
               
                <div className="submit-container">
                    <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}
export default Login
