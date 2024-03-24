import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import RepairShop from './RepairShop';

const UserAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            const response = await axios.get('https://localhost:7209/api/Appointment/Get');
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
        
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Appointment Id</th>
                    <th scope='col'>Mobile Model</th>
                    <th scope='col'>Problem</th>
                    <th scope='col'>Appointment Status</th>
                    <th scope='col'>Repair Status</th>
                </tr>
            </thead>
            <tbody>
                {appointment.map(e => (
                    <tr key={e.appointmentId}>
                        <td>{e.appointmentId}</td>
                        <td>{e.mobile.mobile_ModelName}</td>
                        <td>{e.mobile.problemDescription}</td>
                        <td>{e.appointmentStatus}</td>
                        {/* <td>{e.appointmentId}</td> */}
                        {/* <td>{e.services.repair_Status}</td> */}
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default UserAppointment;
