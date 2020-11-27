import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
import { register } from './serviceWorker'
function Login() {

const [email, setEmail] = useState("initialState") 
const [password, setPassword] = useState("initialState")

const signIn = e=>{e.preventDefault();

  //when click on button {}
//some fancy firebase login shitt...what mean ?
////preventDefault  防止默認 刷新 . 填完物件後 內容被刷新

}

const register = e =>{e.preventDefault();
  // when click on button { register }
  //preventDefault  防止默認 刷新 . 填完物件後 內容被刷新
}


  return (
    
    <div className='login'>
      <Link to="/">
          {/* <img        className="login_logo" src='/Users/yutungcheng/project_front/Amazon/amazone-clone/image/logo.jpg'></img> */}
    <img className="login_logo" src="/Users/yutungcheng/project_front/Amazon/amazone-clone/image/download.png" />

      </Link>
      

{/* //建立第二區塊section */}
<div className="login_container">
  <h1>Sigin in 登入帳號</h1>

  <form>
    <h5>Email</h5>
    <input type="text" value={email} onchange={e=> setEmail(e.target.valure)}></input>
 
    <h5>Password</h5>
    <input type="text" type="password" value={password} onchange={e =>setPassword(e.target.value) }></input>
  

    <button  className="login_si" type="submit" onclink={signIn}
    className="login_signInButton">登入帳號</button>
  </form>
 <p>

這個是Kunanu-適合專給予台灣人使用
的Twitter ,可以Post短片,及新聞, 並且會標籤分類. Twitter全世界很多人使用,台灣卻極少人使用, 原因是台灣人討論是情不喜歡太多國際化. 這也是好處！國際的TWITTER一堆假新聞. 

</p>
<section className="login_account">
<button className="create_account" type ="submit" onClick={register} >創建你的kunanu帳號</button>

</section>


</div>







    </div>

  )
}

export default Login

