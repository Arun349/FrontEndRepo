// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from  './Sidebar'
// import Cookies from 'js-cookie';
// // import RepairShop from './RepairShop';


// const FinalUserAppointment = () => {
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
        
//         <div><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav></div>
//         <Sidebar/>
//         <br></br>
//         <h1 style={{marginLeft:"20%"}}>My Appointments</h1><br></br>
//         <table id="apptable" className="table">
//             <thead>
//                 <tr>
//                     <th scope='col'>Appointment Id</th>
//                     <th scope='col'>Date</th>
//                     <th scope='col'>Shop Name</th>
//                     <th scope='col'>Appointment Status</th>
//                     <th scope='col'>Repair Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {appointment.filter((item)=>item.user.userId == Cookies.get("UserId"))
//                 .map(e => (
//                     <tr key={e.finalAppointmentId}>
//                         <td>{e.finalAppointmentId}</td>
//                         <td>{e.date}</td>
//                         <td>{e.repairShop.shopName}</td>
//                         {/* <td>{e.mobileModel}</td>
//                         <td>{e.problemDescription}</td> */}
//                         <td>{e.appointmentStatus}</td>
//                         <td>{e.repairStatus}</td>
//                         {/* <td>{e.appointmentId}</td> */}
//                         {/* <td>{e.services.repair_Status}</td> */}
                        
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         </>
//     );
// };

// export default FinalUserAppointment;































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from  './Sidebar'
// import Cookies from 'js-cookie';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const FinalUserAppointment = () => {
    // const [appointment, setAppointment] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [show, setShow] = useState(false);
    // const [rating, setRating] = useState(0);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // useEffect(() => {
    //     const fetchServices = async () => {
    //         setLoading(true);
    //         const response = await axios.get('https://localhost:7209/api/FinalAppointment/Get');
    //         setAppointment(response.data);
    //         console.log(response.data);
    //         setLoading(false);
    //     };
    //     fetchServices();
    // }, []);

    // const handleRatingSubmit = async () => {
    //     try {
    //         await axios.post('/api/ratings', { rating });
    //         alert('Rating submitted successfully!');
    //         handleClose();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//         <div><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav></div>
//         <Sidebar/>
//         <br></br>
//         <h1 style={{marginLeft:"20%"}}>My Appointments</h1><br></br>
//         <table id="apptable" className="table">
//             <thead>
//                 <tr>
//                     <th scope='col'>Appointment Id</th>
//                     <th scope='col'>Date</th>
//                     <th scope='col'>Shop Name</th>
//                     <th scope='col'>Appointment Status</th>
//                     <th scope='col'>Repair Status</th>
//                     <th scope='col'>Rate</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {appointment.filter((item)=>item.user.userId == Cookies.get("UserId"))
//                 .map(e => (
//                     <tr key={e.finalAppointmentId}>
//                         <td>{e.finalAppointmentId}</td>
//                         <td>{e.date}</td>
//                         <td>{e.repairShop.shopName}</td>
//                         <td>{e.appointmentStatus}</td>
//                         <td>{e.repairStatus}</td>
//                         <td><Button variant="primary" onClick={handleShow}>Rate</Button></td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>

//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Rate your experience</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <div onChange={event => setRating(event.target.value)}>
//                     <input type="radio" value="1" name="rating" /> 1
//                     <input type="radio" value="2" name="rating" /> 2
//                     <input type="radio" value="3" name="rating" /> 3
//                     <input type="radio" value="4" name="rating" /> 4
//                     <input type="radio" value="5" name="rating" /> 5
//                 </div>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>Close</Button>
//                 <Button variant="primary" onClick={handleRatingSubmit}>Submit Rating</Button>
//             </Modal.Footer>
//         </Modal>
//         </>
//     );
// };

// export default FinalUserAppointment;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from  './Sidebar'
import Cookies from 'js-cookie';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FinalUserAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState();
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setSelectedAppointmentId(id);
        setShow(true);
    };

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

    const handleRatingSubmit = async () => {
        try {
            await axios.post('https://localhost:7209/api/FinalAppointment/UpdateRating', {id: selectedAppointmentId, rating: rating }).then((response)=>{
                console.log(response)
            })         
            alert('Rating submitted successfully!');
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div><nav  id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 data-testid="Mynav" style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav></div>
        <Sidebar/>
        <br></br>
        <h1 data-testid="heading" style={{marginLeft:"20%"}}>My Appointments</h1><br></br>
        <table data-testid="table" id="apptable" className="table">
            <thead>
                <tr>
                    <th scope='col'>Appointment Id</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Shop Name</th>
                    <th scope='col'>Appointment Status</th>
                    <th scope='col'>Repair Status</th>
                    {appointment.some(item => item.repairStatus === "Resolved") && <th scope='col'>Rate</th>}
                </tr>
            </thead>
            <tbody>
                {appointment.filter((item)=>item.user.userId == Cookies.get("UserId"))
                .map(e => (
                    <tr key={e.finalAppointmentId}>
                        <td>{e.finalAppointmentId}</td>
                        <td>{e.date}</td>
                        <td>{e.repairShop.shopName}</td>
                        <td>{e.appointmentStatus}</td>
                        <td>{e.repairStatus}</td>
                        {e.repairStatus === "Resolved" && <td><Button variant="primary" onClick={() => handleShow(e.finalAppointmentId)}>Rate</Button></td>}
                    </tr>
                ))}
            </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                 <Modal.Title>Rate your experience</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div  onChange={event => setRating(event.target.value)}>
                     <input type="radio" value={1} name="rating" /> 1 &nbsp;
                     <input type="radio" value={2} name="rating" /> 2 &nbsp;
                     <input type="radio" value={3} name="rating" /> 3 &nbsp;
                     <input type="radio" value={4} name="rating" /> 4 &nbsp;
                     <input type="radio" value={5} name="rating" /> 5 &nbsp;
                 </div>
             </Modal.Body>
             <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>Close</Button>
                 <Button variant="primary" onClick={handleRatingSubmit}>Submit Rating</Button>
             </Modal.Footer>
         </Modal>
        </>
    );
};

export default FinalUserAppointment;