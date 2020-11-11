import React, { createContext, useContext, useReducer } from "react";

//context 上下文  
// 上文 可以稱為creat  下文稱為從上文把資料拉下來

//準備好數據 data layer  ((當按下購買物品後數據會送到數據層))
// 預設
export const StateContext = createContext();

//狀態提供者 ((基本上先不需要知道這些是做甚麼 參考臉書的範例 github ))

//所有組件的提供者 ((先把這個copy起來))
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//從數據層將資訊拉進來的功能
export const useStateValue = () => useContext(StateContext);
