//這個初始狀態給予定義在 購物籃使用
export const initialState = {
  basket: [],
};

//基本上是將點擊 add to basket (購買) 送到數據層  ,使用提到的reducer={reducer}
// 相對後續也可以從數據層拉到pull (購物藍車 )裡面

const reducer = (state, action) => {
  // state 初始狀態
  // actaion 從籃子取出來，你想要在這裡做甚麼?

  //需要一個開關 和 做甚麼動作
  switch (action.type) {
    //發生購買的時候
    case "ADD_TO_BASKET購買":
      return {
        //回到狀態會到欄位及動作的項目
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
