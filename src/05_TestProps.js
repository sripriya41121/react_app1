import React from 'react';

const TestPropsFC = (props) => {
  return (
    <div>
        <center>
            <h3>
                Name: {props.name} age: {props.age}
            </h3>
        </center>
    </div>
  )
}

export  {TestPropsFC};