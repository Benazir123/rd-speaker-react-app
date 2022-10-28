import React, { useEffect, useState } from "react";
import '../index.css'
import { AppService } from "../services/app.service";
import { useNavigate } from "react-router-dom";

function LoginForm(){

    const navigate = useNavigate();
     const [ username, setUsername ] = useState("");
     const [ password, setPassword ] = useState("");
     const appService = new AppService();
     
     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("username", username);
      console.log("password", password);

      const postData = {
        email: username,
        password: password
      }
      
     await appService.post('v2/userlogin', postData).then(response => {
          if(response && response.data && response.data.apiStatus){
            navigate('/home')
            console.log("response", response.data)
            localStorage.setItem("username", JSON.stringify(username))
          }
          // else{
          //   navigate("/");
          // }
      })
    }

    useEffect(() => {
     appService.get('v2/speakerAppSettings').then(response => {
        var SpeakerSettings =  response.data
         console.log("response.data", SpeakerSettings)
       })
    }, []);


  return(
    <div>
      {/* <App username={username}/> */}
    <div className='body'>
    <div id='login'>
      <h3 className="text-center text-white pt-5">Login form</h3> 
       <div className="container">
         <div id="login-row" className="row justify-content-center align-items-center">
           <div id="login-column" className="col-md-6">
             <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={handleSubmit}> 
                  <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label htmlFor="email" className='text-info'>Email:</label><br/>
                        <input 
                        type="email" 
                        name="email" 
                        value={username}
                        placeholder = "Email"
                        className='form-control'
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className='text-info'>Password:</label><br/>
                        <input 
                        type="password" 
                        name="password" 
                        value={password}
                        placeholder = "Password"
                        className='form-control'
                        onChange={(event)=> setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                         <input 
                         type="submit" 
                         name="submit" 
                         className="btn btn-info btn-md" 
                         value="submit"
                         />
                    </div>
                </form>
              </div>
           </div>
         </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default LoginForm;