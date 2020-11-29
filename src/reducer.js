//這個初始狀態給予定義在 購物籃使用
export const initialState = {
  basket: [],
  user:null ,
};
//基本上是將點擊 add to basket (購買) 送到數據層  ,使用提到的reducer={reducer}
// 相對後續也可以從數據層拉到pull (購物藍車 )裡面

//very powerful 語法 將所有的 basket總和subtotal.js
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.
  price, 0);
//兩個參數： 箭頭語法 及 0是初始值

//reduce 是累加的由左至右 （ 數量＋2 ,2個item的價格累加 ）

const reducer = (state, action) => {



  // state 初始狀態
  // actaion 從籃子取出來，動作後?    // => { new state }  

//   Actions 是從你的應用程式傳遞資料到你的 store 的資訊 payload。它們是 store 唯一的資訊來源。你藉由 store.dispatch() 來把它們傳遞到 store。

// Action 是一般的 JavaScript 物件。action 必須有一個 type 屬性，它代表被執行的 action 的類型。Type 通常應該被定義成字串常數。一旦你的應用程式夠大了，你能會想把它們移進一個單獨的 module。



console.log("this si the basket >>>>>", action);

 console.log("this si the basket .type>>>>>", action.id);

//非常重要！！！！！！！！！！！！！！

  //需要一個開關 和 做甚麼動作
  switch (action.type) {
    //發生購買的時候
    case "ADD_TO_BASKET":
      return {
        //回到狀態會到欄位及動作的項目
        ...state,
        basket: [...state.basket, action.item],
      }

      // ...state.basket >>> Ａ的欄位 Ｃ的欄位 Ｄ的欄
    case "REMOVE_FROM_BASKET":
      //  回到狀態～欄位及動作的項目
          //  從動作中濾除商品ＩＤ
    //     ...state, 
    //     basket: state.basket.filter(item =>item.id!=action.id)}
 
    console.log('REMOVE');

  const index = state.basket.findIndex ( 
  (basketItem)=>basketItem.id ===action.id ) ; 
  // state of Index  陣列索引匯出


  let newBasket = [...state.basket] ; 
  //https://dev.to/sagar/three-dots---in-javascript-26ci 
  
  if( index >= 0 ) {
 newBasket.splice(index,1);
 //從指定到的索引上刪除,1個元素 //
//假如index 是 2 從2開始刪除

  }else {
console.warn (
  `不能移除商品 （id:${action.id})他不在購物箱裡`
) 
//show 給 devTool console 一個警告訊息
}

return {
...state,
basket:newBasket,

}

case "SET_USER" : 

return {

...state , 
user: action.user
}







     
default:
      return state;
  }

}
export default reducer ;
