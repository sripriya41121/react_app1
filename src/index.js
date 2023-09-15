import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Test from './Test';
import  { FC1 } from './01_Functional_Components';
import CC from './02_Class_Components';
import {TestStatesFC} from './05_States_FC';
import {TestEvent} from './06_TestEvent';
import TestOnChange from './07_TestOnChange';
import {Example} from './10_UseEffect';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TestOnSubmit from './08_TestOnSubmit';
import ResuableComponents from './09_ResuableComponents';
import {Img}  from './09_Img';
import {ReusableComponents_API} from './11_API_ReusableComponents';
import {HandlingAPI2} from './12_Handling_API2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Test /> */}
    {/* <FC1 /> */} 
    {/* <CC /> */} 
    {/* <TestStatesFC />*/}
    {/* <TestEvent /> */}
    {/* <TestOnChange /> */}
    {/* <TestOnSubmit /> */}
    {/* <ResuableComponents/> */}
    {/* <Example/> */}
    {/* <ReusableComponents_API/> */}
    <HandlingAPI2/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
