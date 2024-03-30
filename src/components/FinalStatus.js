import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ShopSidebar from './ShopSidebar';
import Cookies from 'js-cookie';
import Alert from '@mui/material/Alert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";









const FinalStatus = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);
    const iprmsg=useRef();
    const resmsg=useRef();
    const [selectedDate, setSelectedDate] = useState(null);
    
    

    const handleDateChange = (value) => {
        setSelectedDate(value);
    };

    useEffect(() => {
        fetchServices();
    }, []);

        const fetchServices = async () => {
            setLoading(true);
            const response = await axios.get('https://localhost:7209/api/FinalAppointment/Get');
            setAppointment(response.data);
            console.log(response.data);
            setLoading(false);
        };

        const handleApprove = async (Id) => {
            try {
                await axios.post('https://localhost:7209/api/FinalAppointment/Update', { id:Id,rStatus: "In Progress"});
                 
            iprmsg.current.style.display="block"
            setTimeout(() => {
                fetchServices();
            }, 1000);
            } catch (error) {
                // console.error(error);
            }
        };

        
        
        const handleReject = async (Id) => {
            try {
                await axios.post('https://localhost:7209/api/FinalAppointment/Update', { id:Id,rStatus: 'Resolved' });
                 
            resmsg.current.style.display="block"
            setTimeout(() => {
                fetchServices();
            }, 1000);
            } catch (error) {
                console.error(error);
            }
        };


        

    if (loading) {
        return <div>Loading...</div>;
    }


    
  

    return (
        <>
        
        
        <div><nav id="shopnavbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav></div>
        <ShopSidebar/>
        {/* <DatePicker  id="date" placeholderText='Filter by date' selected={selectedDate} onChange={date => setSelectedDate(date)}    className="date-picker" /> */}
        
        {/* <DatePicker id="date" label="Basic date picker" /> */}

        <div>
            <DatePicker 
                id="example-datepicker" 
                value={selectedDate} 
                onChange={handleDateChange}
                placeholderText='Filter By Date' 
              
            />
        </div>


        <br></br>
        <Alert id="aprmsg"  ref={iprmsg} variant='filled' style={{width:"40%",marginLeft:"35%",marginTop:"-4%"}}   severity="warning">Status Changed to In Progress
        </Alert>

        <Alert id="aprmsg"  ref={resmsg} variant='filled' style={{width:"40%",marginLeft:"35%",marginTop:"-4%"}}   severity="info">
                             Status Changed to Resolved
        </Alert>

        <h2 style={{marginLeft:"18%"}}>Repair Status</h2><br></br>
        <table style={{marginLeft:"18%",width:"80%",marginTop:"-1%"}} className="table">
            <thead>
                <tr>
                   <th scope='col'>Appointment Id</th>
                   <th scope='col'>Appointment Date</th>
                    <th scope='col'>Customer Name</th>
                    <th scope='col'>Contact Number</th>
                    <th scope='col'>Mobile Model</th>
                    <th scope='col'>Problem</th>
                    {/* <th scope='col'>Appointment Status</th>  */}
                    <th scope='col'>Repair Status</th>
                    <th scope='col'>Actions</th>
                   
                </tr>
            </thead>
            <tbody>
            {appointment.filter(item => item.repairShop.email == Cookies.get("Emailid") && (!selectedDate || new Date(item.date).toDateString() === selectedDate.toDateString())).map(e => (
                    <tr key={e.finalAppointmentId}>
                        <td>{e.finalAppointmentId}</td>
                        <td>{e.date}</td>
                        <td>{e.user.name}</td>
                        <td>{e.user.contactNo}</td>
                        <td>{e.mobileModel}</td>
                        <td>{e.problemDescription}</td>
                        <td>{e.repairStatus}</td>
                     
                        <td>
                        <button onClick={() => handleApprove(e.finalAppointmentId)} type="button" class="btn btn-warning">In Progress</button>
                        <span> </span>
                        <button onClick={() => handleReject(e.finalAppointmentId)} type="button" class="btn btn-info">Resolved</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default FinalStatus;
