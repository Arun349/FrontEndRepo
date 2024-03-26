import React, { Component, useEffect } from 'react'
import axios from 'axios'
import { useState, useRef } from 'react';
import { Message } from 'rsuite';
import { Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Cookies from 'js-cookie';


  
  const UserRegister = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState([""]);
  const [Email, setEmail] = useState();
  const [Contact, setContact] = useState([""]);
  const [Password, setPassword] = useState();
  const msgref = useRef();
  const lenref = useRef();
  const nullemail = useRef();
  const notref = useRef();
  const txterr= useRef();
  const [txtclr, setTxtclr]= useState();
  const [focpsd , setFocpsd]= useState();
  const [focmail , setFocmail]= useState();
  const [txtclrmail, setTxtclrmail] = useState();

  const handleSignupForm = async event => {
    
    event.preventDefault();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {
      name: Name,
      email: Email,
      contactNo:Contact,
      password: Password

    }

    if (Password.length <8 ) {
      notref.current.style.display = "none"
      lenref.current.style.display = "block"
      setTxtclr("error")
      setFocpsd("true")


    }

  else if(Password.length >= 14){
    lenref.current.style.display="none"
    notref.current.style.display = "block"
  }

    else {
      setFocpsd("")
      notref.current.style.display="none"
      lenref.current.style.display="none"
      

      let URL = "https://localhost:7209/api/User";
      await axios.post(URL, param, {
        headers: headers
      }).then((response) => {
        var result = JSON.parse(response.data)
        console.log(result)
        if (result == null || result== undefined) {
          
        }
        else if (result.accountexist == true) {
          nullemail.current.style.display = "block"
          setTxtclrmail("error")
          setFocmail("true")
      
        }

        else {
          setFocmail("")
          nullemail.current.style.display = "none"
          msgref.current.style.display = "block";

          console.log(response);
          // Cookies.set("id",result.id)
          
          setTimeout(() => {
            msgref.current.style.display = "none";
            // Cookies.set('Signin', true);
            navigate('/userLogin')
          }, 500);



        };

      });


    }



  }

  return (
    <><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav>
     <div className='auth-wrapper '>   <div className='auth-inner'> <form onSubmit={handleSignupForm}>

<h3 data-testid="Heading"><PersonAddAltRoundedIcon fontSize='large' id="icon"/> Sign Up</h3>

<div><TextField  id="outlined-basic"  label="Name" variant="outlined"  onChange={(e) => setName(e.target.value)} required /></div>
<br></br>
{/* <div className="mb-3">
  <label>First name</label>
  <input
    type="text"
    className="form-control"
    placeholder="First name"
    onChange={(e) => setFirstName(e.target.value)}
    required
  />
</div> */}


{/* <div className="mb-3">
  <label>Last name</label>
  <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} required/>
</div> */}

<div> <TextField type="email" id="outlined-basic" label="Email" variant="outlined" color={txtclrmail} focused={focmail} onChange={(e) => setEmail(e.target.value)} required />  </div> 
<br></br>


<div> <TextField id="outlined-basic" label="Contact No" variant="outlined"  onChange={(e) => setContact(e.target.value)} required />  </div>
<br></br>
{/* <div className="mb-3">
  <label>Email address</label>
  <input
    type="email"
    className="form-control"
    placeholder="Enter email"
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</div> */}

<div>  <TextField type="password" color={txtclr} ref={txterr} focused={focpsd} id="outlined-basic" label="Password" variant="outlined"   onChange={(e) => setPassword(e.target.value)} required /></div>
<br></br>
{/* <div className="mb-3">
  <label>Password</label>
  <input
    type="password"
    className="form-control"
    placeholder="Enter password"
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</div> */}



<p ref={lenref} className='len'>Password should not be less than 8 characters</p>
<p ref={notref} className='len'>Password Should not exceeds 14 characters</p>
<div className="d-grid">
  {/* <button type="submit" className="btn btn-primary">
    Sign Up
  </button> */}

<Button type='submit' variant='contained' color="secondary">Sign Up</Button>


</div>
<p className="forgot-password text-right">
  Already registered? <a href="/userLogin">Sign In</a>
</p>
<div class="alert alert-success msg" ref={msgref} role="alert">
  Registeration Successful!
</div>

<div class="alert alert-danger msg" ref={nullemail} role="alert">
  This email Id is already exist
</div>



</form>
</div></div>
         </>
  )
}

export default UserRegister;