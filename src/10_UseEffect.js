import React, { useEffect, useState } from 'react'

const Example = () => {
    const [count,setCount] = useState(0);
    const [oCount,setoCount] = useState(0);
useEffect(()=>{
    document.title=`You have added ${count} items`;
},[oCount])
  return (
    <div>
        <p>'You have added {count} items'</p>
        <button className='btn btn-primary' onClick={()=>
        {
              if(count%10==0){
                setoCount(count);
              }
              setCount(count+1);
        }}>
            Add Item
        </button>
    </div>
  )
}

export {Example}