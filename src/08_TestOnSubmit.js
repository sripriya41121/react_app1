import React, {useState} from 'react'

const TestOnSubmit = () => {
const [data, setData]=useState({
    email: "",
    password: ""
})

const changeHandler=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
}

const submitHandler=(e)=>{
     
    e.preventDefault();
    if(data.password.length<5){
        alert('Please provide password greater than 5 characters!');
    }
    else{
        console.log(data);
        alert('                 SRI PRIYA APRIL FOOL');
    }

}


  return (
    <div>
        <center>
            <h3>
                <form onSubmit={submitHandler}> 

                        <label style={{color: 'blue', fontFamily:'monospace'}}>Email: </label>
                        <input type='email' name='email' onChange={changeHandler}/><br/>


                        <label style={{color: 'blue', fontFamily:'monospace'}}>password: </label>
                        <input type='password' name='password' onChange={changeHandler}/><br/>

                        <input type='submit' value="login" className='btn btn-primary'/>
                </form>
            </h3>
        </center>
    </div>
  )
}

export default TestOnSubmit