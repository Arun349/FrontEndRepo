// import React from 'react'


// function RepairShop() {
//   return (
//     <div>
//         <nav id="nav1" class="navbar navbar-expand-lg navbar-light bg-light"><h1>Mobile Repair Web Application</h1></nav>
//         <br></br>
//         <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">S.No</th>
//       <th scope="col">Username</th>
//       <th scope="col">Contact No</th>
//       <th scope="col">Mobile Model</th>
//       <th scope="col">Problem</th>
//       <th scope="col">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>123456789</td>
//       <td>Redmi 8</td>
//       <td>Display change</td>
//       <td><button type="button" class="btn btn-success">Approve</button><span> </span>
//       <button type="button" class="btn btn-danger">Danger</button></td>
//     </tr>
   
//   </tbody>
// </table>
//     </div>
//   )
// }

// export default RepairShop







import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepairShop = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            const response = await axios.get('https://localhost:7209/api/Services/Get');
            setServices(response.data);
            setLoading(false);
        };

        fetchServices();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Service ID</th>
                    <th scope='col'>User ID</th>
                    <th scope='col'>Repair Shop ID</th>
                    <th scope='col'>Mobile ID</th>
                    <th scope='col'>Appointment ID</th>
                    <th scope='col'>Repair Status</th>
                </tr>
            </thead>
            <tbody>
                {services.map(service => (
                    <tr key={service.serviceId}>
                        <td>{service.serviceId}</td>
                        <td>{service.user.name}</td>
                        <td>{service.repairShop.shopName}</td>
                        <td>{service.mobile.mobileId}</td>
                        <td>{service.appointment.appointmentId}</td>
                        <td>{service.repair_Status}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RepairShop;
