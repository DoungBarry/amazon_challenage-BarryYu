import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
function Login() {
  return (
    
    <div className='login'>
      <Link to="/">
          <img        className="login_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
  
      </Link>
      

{/* //建立第二區塊section */}
<div className="login_container">
  <h1>Sigin in 登入帳號</h1>

  <form>
    <h5>Email</h5>
    <input type="text"></input>
  </form>
  <form>
    <h5>Password</h5>
    <input type="text"></input>
  </form>
  <button className="login_signInButton" onclink="click">登入帳號</button>
<p>

這個是Kunamu-適合專給予台灣人使用
的Twitter ,可以Post短片,及新聞, 並且會標籤分類. Twitter全世界很多人使用,台灣卻極少人使用, 原因是台灣人討論是情不喜歡太多國際化. 這也是好處！國際的TWITTER一堆假新聞. 

</p>
<section className="login_account">
<button onClick="click" >創建帳號</button>

</section>


</div>







    </div>

  )
}

export default Login

