import React from 'react'
import "./Login.css";

const Login = () => {
   

    var userData=[
        {username:"pooja",passcode:124,cart:[] },
        {username:"jan",passcode:120,cart:[] },
        {username:"harini",passcode:129,cart:[] },
    
      ];

     
      const signup=()=>{
        var username=document.getElementById("username").value;
        var userpasscode=document.getElementById("passcode").value;
        var activiewuserdetails=userData.filter((data)=>{
          return username == data.username;
    
        });
        console.log(activiewuserdetails);
        if(activiewuserdetails.length >0){
          if(activiewuserdetails[0].passcode==userpasscode){
            localStorage.setItem("username",activiewuserdetails[0].username);
        window.location.replace("/Home");

          }
          else{
            console.log("wrong password")
          }
        }
      }
  return (
    <div className='ui'>

    <div className='header'><br></br>
        <div className='text'>LOGIN UP</div>
        <div className="inputs"><br></br>
            <input type='text'id="username"/>
            <div className='input'/>
            <input type='password' id='passcode'/><br>
            </br>
        
        <button onClick={signup}>SINGN UP</button>
        <p>forgot password? or sign up</p>

        </div>
        </div>
  </div>
  );
};

export default Login
