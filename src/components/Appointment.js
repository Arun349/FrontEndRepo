import React from 'react'
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import { useState, useRef,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Cookies from 'js-cookie';



function Appointment() {

   const [model, setModel] = useState([""]);
   const [problem, setProblem] = useState();
   const [date,setDate]=useState();
   const [appointmentStatus, setAppointmentStatus] = useState();
   const [repairStatus, setRepairStatus] = useState([""]);
  //  const currentDate = new Date();
   const appmsg=useRef();
   const navigate = useNavigate();

    var Email=Cookies.get("Emailid"); 
    var RepairShopId=Cookies.get("shopId")
 
   const[userid,setUserid]=useState();
   
   useEffect(() => {
    axios.post('https://localhost:7209/api/User/api/FindEmail',{
      email:Email,
    })
    .then(res=>{
      setUserid(res.data.userId);
      console.log(res.data);
      Cookies.set( "UserId", res.data.userId)
    
    
})
.catch((err)=>{console.error(`Error! ${err}`)});
}, [])

   const handleAppointmentForm = async (event) => {
    
    event.preventDefault();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {
        
        // mobileId:0,
        finalAppointmentId:0,
        date :date,
        mobileModel:model,
        problemDescription:problem,
        appointmentStatus:"Pending",
        repairStatus:" Pending",
        userId:userid,
        repairShopId:RepairShopId
    

    }

    let URL = "https://localhost:7209/api/FinalAppointment/Create";
      await axios.post(URL, param, {
        headers: headers
      }).then((response) => {
        
    console.log(response.data)
    // Cookies.remove("shopId")
    appmsg.current.style.display="block"

    setTimeout(() => {
      navigate('/finalUser')
    }, 2000);

      })
    }


  return (
    <form onSubmit={handleAppointmentForm}>
      <div><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav>
      </div>
    <div>
        
        <Card className='OverallAppointment' style={{ width: '35rem',alignItems:'center' }}><br></br>
        <h2>Appointment Page</h2><br></br>
        <div> <TextField type="text" id="outlined-basic" label="Mobile model name" variant="outlined" onChange={(e) => setModel(e.target.value)} required />  </div> 
<br></br>

<div> <TextField type="text" id="outlined-basic" label="Problem Description" variant="outlined"  onChange={(e) => setProblem(e.target.value)} required />  </div> 
<br></br>

{/* <div> <TextField type="date" id="outlined-basic" label="Select Apppointment date" variant="outlined"  onChange={(e) => setDate(e.target.value)} required />  </div>  */}
<div> 
  <TextField 
    type="date" 
    id="outlined-basic" 
    label="Select Appointment date" 
    variant="outlined"  
    onChange={(e) => setDate(e.target.value)} 
    required 
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      placeholder: ' ',
    }}
  />  
</div>




<br></br>

<Button type='submit' variant="primary">Submit</Button>
<br></br>

<div class="alert alert-success msg" ref={appmsg} role="alert">
         Appointment Request Created!
         </div>

        </Card>

        </div>
        

        </form>
  )
}


export default Appointment;