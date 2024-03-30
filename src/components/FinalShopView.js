// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import RepairShop from './RepairShop';

// const FinalShop = () => {
//     const [appointment, setAppointment] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchServices = async () => {
//             setLoading(true);
//             const response = await axios.get('https://localhost:7209/api/FinalAppointment/Get');
//             setAppointment(response.data);
//             console.log(response.data);
//             setLoading(false);
//         };

//         fetchServices();
//     }, []);




//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//         <h1>Repair Shop Page</h1><br></br>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th scope='col'>Appointment Id</th>
//                     <th scope='col'>Customer Name</th>
//                     <th scope='col'>Contact Number</th>
//                     <th scope='col'>Mobile Model</th>
//                     <th scope='col'>Problem</th>
//                     <th scope='col'>Appointment Status</th>
//                     <th scope='col'>Actions</th>
//                     {/* <th scope='col'>Repair Status</th> */}
//                 </tr>
//             </thead>
//             <tbody>
//                 {appointment.map(e => (
//                     <tr key={e.finalAppointmentId}>
//                         <td>{e.finalAppointmentId}</td>
//                         <td>{e.user.name}</td>
//                         <td>{e.user.contactNo}</td>
//                         <td>{e.mobileModel}</td>
//                         <td>{e.problemDescription}</td>
//                         <td>{e.appointmentStatus}</td>
//                         <td><button onClick={handleApprove} type="button" class="btn btn-success">Approve</button><span>   <button type="button" class="btn btn-danger">Reject</button></span></td>
//                         {/* <td>{e.repairStatus}</td> */}
//                         {/* <td>{e.appointmentId}</td> */}
//                         {/* <td>{e.services.repair_Status}</td> */}

//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         </>
//     );
// };

// export default FinalShop;
















import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ShopSidebar from './ShopSidebar';
import Cookies from 'js-cookie';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FinalShop = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);
    const aprref = useRef();
    const rejref = useRef();
    const [selectedDate, setSelectedDate] = useState(null);


    useEffect(() => {
        fetchServices();
    }, [selectedDate]);

    const fetchServices = async () => {
        setLoading(true);
        const response = await axios.get('https://localhost:7209/api/FinalAppointment/Get');
        setAppointment(response.data);

        const appointments = response.data;
        if (selectedDate) {
            const filteredAppointments = appointments.filter(appointment => new Date(appointment.date).toDateString() === selectedDate.toDateString());
            setAppointment(filteredAppointments);
        } else {
            setAppointment(appointments);
        }

        console.log(response.data);
        setLoading(false);
    };

    // const handleApprove = async (id) => {
    //     await axios.put(`https://localhost:7209/api/FinalAppointment/Put/${id}`, { appointmentStatus: 'Approved' });
    //     fetchServices();
    // };

    // const handleReject = async (id) => {
    //     await axios.put(`https://localhost:7209/api/FinalAppointment/Put/${id}`, { appointmentStatus: 'Rejected' });
    //     fetchServices();
    // };


    const handleApprove = async (Id) => {
        try {
            await axios.post('https://localhost:7209/api/FinalAppointment/Put', { id: Id, status: "Approved" });



            aprref.current.style.display = "block"
            setTimeout(() => {
                fetchServices();
            }, 1000);




        } catch (error) {
            // console.error(error);
        }
    };

    const handleReject = async (Id) => {
        try {
            await axios.post('https://localhost:7209/api/FinalAppointment/Put', { id: Id, status: 'Rejected' });
            rejref.current.style.display = "block"
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

            <div><nav id="shopnavbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{ marginLeft: "3%" }}>Mobile Repair Web Application</h2></nav></div>
            <ShopSidebar />
            <br></br>
            <DatePicker id="date" placeholderText='Filter By Date' selected={selectedDate} onChange={date => setSelectedDate(date)} />

            <Alert id="aprmsg" ref={aprref} variant='filled' style={{ width: "40%", marginLeft: "35%", marginTop: "-4%" }} severity="success">
                Appointment Approved
            </Alert>

            <Alert id="aprmsg" ref={rejref} variant='filled' style={{ width: "40%", marginLeft: "35%", marginTop: "-4%" }} severity="error">
                Appointment Rejected
            </Alert>

            <h2 style={{ marginLeft: "18%" }}>Customer Appointments</h2><br></br>
            <table style={{ marginLeft: "18%", width: "80%", marginTop: "-0%" }} className="table">
                <thead>
                    <tr>
                        <th scope='col'>Appointment Id</th>
                        <th scope='col'>Appointment Date</th>
                        <th scope='col'>Customer Name</th>
                        <th scope='col'>Contact Number</th>
                        <th scope='col'>Mobile Model</th>
                        <th scope='col'>Problem</th>
                        <th scope='col'>Appointment Status</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointment.filter((item) => item.repairShop.email == Cookies.get("Emailid"))
                        .map(e => (
                            <tr key={e.finalAppointmentId}>
                                <td>{e.finalAppointmentId}</td>
                                <td>{e.date}</td>
                                <td>{e.user.name}</td>
                                <td>{e.user.contactNo}</td>
                                <td>{e.mobileModel}</td>
                                <td>{e.problemDescription}</td>
                                <td>{e.appointmentStatus}</td>
                                <td>
                                    <button onClick={() => handleApprove(e.finalAppointmentId)} type="button" class="btn btn-success">Approve</button>
                                    <span>   </span>
                                    <button onClick={() => handleReject(e.finalAppointmentId)} type="button" class="btn btn-danger">Reject</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default FinalShop;
