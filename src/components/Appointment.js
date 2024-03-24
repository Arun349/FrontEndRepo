import React from 'react'
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Cookies from 'js-cookie';

function Appointment() {

   const [model, setModel] = useState([""]);
   const [problem, setProblem] = useState();
   const [appointmentStatus, setAppointmentStatus] = useState();
   const [repairStatus, setRepairStatus] = useState([""]);
   const currentDate = new Date();


   const handleAppointmentForm = async (event) => {
    
    event.preventDefault();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {
        
        // mobileId:0,
        finalAppointmentId:0,
        date :currentDate,
        mobileModel:model,
        problemDescription:problem,
        appointmentStatus:"Pending",
        repairStatus:" Pending",
        userId:1,
        repairShopId:1
        // userId:Cookies.get("id")

    }

    let URL = "https://localhost:7209/api/FinalAppointment/Create";
      await axios.post(URL, param, {
        headers: headers
      }).then((response) => {
        
    
      })
    }


  return (
    <form onSubmit={handleAppointmentForm}>
    <div>
        
        <Card className='OverallAppointment' style={{ width: '35rem',alignItems:'center' }}><br></br>
        <h2>Appointment Page</h2><br></br>
        <div> <TextField type="text" id="outlined-basic" label="Mobile model name" variant="outlined" onChange={(e) => setModel(e.target.value)} required />  </div> 
<br></br>

<div> <TextField type="text" id="outlined-basic" label="Problem Description" variant="outlined"  onChange={(e) => setProblem(e.target.value)} required />  </div> 
<br></br>

<Button type='submit' variant="primary">Submit</Button>
<br></br>

        </Card>
        </div>
        </form>
  )
}


export default Appointment;