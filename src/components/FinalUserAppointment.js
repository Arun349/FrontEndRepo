import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from  './Sidebar'
import Cookies from 'js-cookie';
// import RepairShop from './RepairShop';


const FinalUserAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            const response = await axios.get('https://localhost:7209/api/FinalAppointment/Get');
            setAppointment(response.data);
            console.log(response.data);
            setLoading(false);
            
        };
        fetchServices();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        
        <div><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav></div>
        <Sidebar/>
        <br></br>
        <h1 style={{marginLeft:"20%"}}>My Appointments</h1><br></br>
        <table id="apptable" className="table">
            <thead>
                <tr>
                    <th scope='col'>Appointment Id</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Shop Name</th>
                    <th scope='col'>Appointment Status</th>
                    <th scope='col'>Repair Status</th>
                </tr>
            </thead>
            <tbody>
                {appointment.filter((item)=>item.user.userId == Cookies.get("UserId"))
                .map(e => (
                    <tr key={e.finalAppointmentId}>
                        <td>{e.finalAppointmentId}</td>
                        <td>{e.date}</td>
                        <td>{e.repairShop.shopName}</td>
                        {/* <td>{e.mobileModel}</td>
                        <td>{e.problemDescription}</td> */}
                        <td>{e.appointmentStatus}</td>
                        <td>{e.repairStatus}</td>
                        {/* <td>{e.appointmentId}</td> */}
                        {/* <td>{e.services.repair_Status}</td> */}
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default FinalUserAppointment;
