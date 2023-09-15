import React from 'react';


const Img = ({key, value}) =>{
  return (
    <div style={{display:'inline'}}>
        <img src={value} height={200} width={200} alt='NoImage'/>
    </div>
  )
}

export default Img