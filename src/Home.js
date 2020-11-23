import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt=" "
        />

        <div className="home_row">
          <Product
          
            title="Fitbit Versa 2 健康與健身智慧型手錶 帶心率 音樂功能 Alexa內建 睡眠和游泳追蹤 黑/碳 單一尺寸 (含 S 和 L 錶帶)"
            price={100}
            rating={5}
            image="https://d34ojwe46rt1wp.cloudfront.net/wp-content/uploads/2020/07/EDMAsia-1030x644.jpg"
          />
          <Product
            title="Fitbit Versa 2 健康與健身智慧型手錶 帶心率 音樂功能 Alexa內建 睡眠和游泳追蹤 黑/碳 單一尺寸 (含 S 和 L 錶帶)"
           
            price={200}
            rating={5}
            image="https://media.cakeresume.com/image/upload/s--TKyX9I7p--/c_fill,g_face,h_300,w_300/v1593495134/awkwdbvwempqs1aq9pfy.jpg"
          />

          {/* <Product
            title="TP-Link AC1750 智慧 WiFi 路由器 (Archer A7) - 家用雙頻千兆無線網路路由器 適用於 Alexa、VPN 伺服器、家長控制和 QoS"
            price={1000}
            rating={5}
            image="https://upload.wikimedia.org/wikipedia/commons/5/53/Asus_x21_ultrabook.jpg"
          /> */}
          {/* {/* product */}
        </div>

        <div className="home_row">
          <Product
            title="TP-Link AC1750 智慧 WiFi 路由器 (Archer A7) - 家用雙頻千兆無線網路路由器 適用於 Alexa、VPN 伺服器、家長控制和 QoS"
      
            price={1000}
            rating={7}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Product
            title="Fitbit Versa 2 健康與健身智慧型手錶 帶心率 音樂功能 Alexa內建 睡眠和游泳追蹤 黑/碳 單一尺寸 (含 S 和 L 錶帶)"
   
            price={100}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Product
            title="Fitbit Versa 2 健康與健身智慧型手錶 帶心率 音樂功能 Alexa內建 睡眠和游泳追蹤 黑/碳 單一尺寸 (含 S 和 L 錶帶)"
       
            price={100}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">
          <Product
            title="Fitbit Versa 2 健康與健身智慧型手錶 帶心率 音樂功能 Alexa內建 睡眠和游泳追蹤 黑/碳 單一尺寸 (含 S 和 L 錶帶)"
            price={100}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          {/* <Product /> */}
          {/* product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
