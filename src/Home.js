import React, { useEffect, useState } from 'react';
import image from "./you4.png";
import image1 from "./you.png";
import image2 from "./you1.png";
import image3 from "./you2.png";
import image4 from "./you6.png";
import axios from 'axios';
const Home = () => {
 
  const [productData,setproductData]=useState([]);
    async function getData(){
      await axios.get('https://dummyjson.com/products').then((res)=>{setproductData(res.data.products)})
  
          
    }
  
  useEffect(() =>{
    getData();                                                                          

  } ,[] );
  console.log(productData);
  return (
    <div>
      Home
      <div className='navbar'>
        <img src= {image} alt="an image"/>
      <div className='parent'>
      <div className='roote'>
        <p>home</p>
        </div>
        <div className='roote2'>
        <p>contact</p>
        </div>
        <div className='roote3'>
        <p>about</p>
        </div>
        <div className='roote4'>
          <button>Login</button>
        </div>
      </div>

     
    </div>
    <div>
       <div className='homepage'>
      <h1>WELCOME TO MY APP</h1>
      <p>This My Home Page</p>
     </div>
     <div className='homepage2'>
     <div className='pro1'>
     < img src ={image1} alt="an image"/>
     <h2>Camera</h2>
     <p>price:$20,0000.5
      
     </p>
     <button>click here</button>

     </div>
     <div className='pro2'>
     < img src ={image2} alt="an image"/>
     <h2>Laptop</h2>
     <p>price:$30,0000.5</p>
     <button>click here</button>
      </div>    
      <div className='pro3'>
      < img src ={image3} alt="an image"/>
     <h2>Headphone</h2>
     <p>price:$50,0000.5</p>
     <button>click here</button>
     </div>  
     <div className='pro4'>
      <img src={image4} alt='an image'/>
      <h2>Iphone</h2>
      <p>price:$1,00000.6</p>
      <button>click here</button>
     </div>
     </div>
      </div>
    </div>
  )

}
export default Home
