import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import RepairShop from './RepairShop';

const FinalStatus = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);

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
                fetchServices();
            } catch (error) {
                // console.error(error);
            }
        };
        
        const handleReject = async (Id) => {
            try {
                await axios.post('https://localhost:7209/api/FinalAppointment/Update', { id:Id,rStatus: 'Resolved' });
                fetchServices();
            } catch (error) {
                console.error(error);
            }
        };

        
   
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <h1>Repair Shop Page - Status</h1><br></br>
        <table className="table">
            <thead>
                <tr>
                   <th scope='col'>Appointment Id</th>
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
                {appointment.map(e => (
                    <tr key={e.finalAppointmentId}>
                        <td>{e.finalAppointmentId}</td>
                        <td>{e.user.name}</td>
                        <td>{e.user.contactNo}</td>
                        <td>{e.mobileModel}</td>
                        <td>{e.problemDescription}</td>
                        {/* <td>{e.appointmentStatus}</td> */}
                        <td>{e.repairStatus}</td>
                        {/* <td>{e.appointmentId}</td> */}
                        {/* <td>{e.services.repair_Status}</td> */}
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
