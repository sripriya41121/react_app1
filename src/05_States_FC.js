import React, {useState} from 'react';
import {TestPropsFC} from './05_TestProps';

const TestStatesFC = () => {
    const [data,setData]=useState({
        name:"SRI PRIYA",
        age:24
    })
    const {name,age}=data // destructuring
  return (
    <div>
        <center>
            <h3>
                Name:{data.name} and age:{data.age}<br/>
                Name={name} and age={age}
                <TestPropsFC name={name} age={age}/>
                
            </h3>
        </center>
    </div>
  )
}

export  {TestStatesFC};