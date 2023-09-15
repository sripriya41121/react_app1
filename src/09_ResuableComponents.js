import React from 'react';
import Img from './09_Img'; 

const ResuableComponents = () => {
    const arr=[
        "https://www.cookwithkushi.com/wp-content/uploads/2021/01/IMG_7765.jpg",
        "https://st2.depositphotos.com/5653638/11789/i/950/depositphotos_117893164-stock-photo-south-indian-food-vada-sambar.jpg",
        "https://e0.pxfuel.com/wallpapers/941/441/desktop-wallpaper-here-s-where-you-ll-find-the-best-dosas-in-chennai-masala-dosa.jpg"
    ]
  return (
    <div><h1 style={{color:'brown'} }>Welcome To Desi Tastes!</h1>

        {arr.map((item,index)=>
        <Img key={index} value={item} />
        //</div><img src={item} height={200} width={200} alt='image' /><br></br>
        )}


    </div>
  );
};

export default ResuableComponents