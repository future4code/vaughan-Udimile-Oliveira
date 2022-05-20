import React from "react";
import { GlobalContext } from "./GlobalStateContext";


export default function GlobalState(props) {


  const data = {}


  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}