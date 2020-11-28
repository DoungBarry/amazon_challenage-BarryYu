import React ,{useState} from 'react'
import "./Login.css"
import {Link,useHistory} from "react-router-dom"

// import { register } from './serviceWorker'
import {auth} from "./firebase"
function Login() {

const [email, setEmail] = useState('') 
const [password, setPassword] = useState('')
const history =useHistory();

const signIn = e=>{ e.preventDefault();
//s1 
  //when click on button {}
//some fancy firebase login shitt...what mean ?
////preventDefault  防止默認 刷新 . 填完物件後 內容被刷新

auth
.signInWithEmailAndPassword(email,password) 
.then(auth=>{
  history.push('/')

console.log(auth)

})
.catch(error=>alert(error.message))
}

const register = e =>{e.preventDefault();
  //s2
  // when click on button { register }
  //preventDefault  防止默認 刷新 . 填完物件後 內容被刷新

auth 
.createUseWithEmailAndPassword(email,password)
//創造用戶
.than((auth)=>{
  // S3 如果成功將創建新用戶帳號的郵件和密碼
  // go to js:js18
console.log(auth)
if(auth){
  history.push('/')
}



  console.log(auth);
})
.catch(error=>alert(error.messages))

//do 

}


// 非常重要auth 到 firebase register shiiiit

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
    <input type="text" value={email} onChange={e=> setEmail(e.target.value)}></input>
 
    <h5>Password</h5>
    <input type="password" value={password} onChange={e =>setPassword(e.target.value) }></input>
  

    <button  className="login_si" type="submit" onClick={signIn}
    className="login_signInButton">登入帳號</button>
  </form>
 <p>

這個是Kunanu-適合專給予台灣人使用
的Twitter ,可以Post短片,及新聞, 並且會標籤分類. Twitter全世界很多人使用,台灣卻極少人使用, 原因是台灣人討論是情不喜歡太多國際化. 這也是好處！國際的TWITTER一堆假新聞. 

</p>
<section className="login_account" >
<button className="create_account" type ="submit" onClick={register} >創建你的kunanu帳號</button>

</section>


</div>







    </div>

  )
}

export default Login

