import React from 'react'

const TestEvent = () => {
  return (
    <div>
        <center>
            <h3>
                <button onClick={()=>{alert("Hello Priya!")}}>Click Me</button>
            </h3>
        </center>
    </div>
  )
}

export {TestEvent};