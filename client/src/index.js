import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {configureStore} from "@reduxjs/toolkit";
//import globalReducer
import globalReducer from "./state/index"
import userReducer from "./utils/userSlice"
import {Provider } from "react-redux";
const appStore=configureStore({
  //import reducer
  reducer :{
    global:globalReducer,
    // user:userReducer

  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={appStore} >
    <App />
    </Provider>

  </React.StrictMode>
);


