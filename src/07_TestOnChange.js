import React, {useState} from 'react'

const TestOnChange = () => {
    const [name, setName]=useState('');
  return (
    <div>
        Name: {name} <br/>
        <input type='text' name='name' onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  )
}

export default TestOnChange