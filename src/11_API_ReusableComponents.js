import React, { useEffect, useState  } from 'react'

const ReusableComponents_API = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch(
            "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
        )
        .then((response)=>response.json())
        .then((json) =>
            
        setData(json.items));
    }, []);


  return (
    <div>
        {
            data.map((item)=>
            <p key={item.id}> {item.name} </p>
        )}
    </div>
  );
};

export {ReusableComponents_API}