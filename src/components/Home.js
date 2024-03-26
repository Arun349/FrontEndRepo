// // import React from 'react'
// // import Navbar from "./Navbar"
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import { useEffect, useState } from 'react';


// // function Home() {

// //     const [data, setData] = useState(null);

// //     useEffect(() => {
// //       fetch('https://localhost:7209/api/RepairShop/Get')
// //         .then(response => response.json())
// //         .then(data => setData(data))
// //         .catch(error => console.error(error));
// //     }, []);


// //   return (
// //     <div><Navbar/>
// //     <div>
// //     <Card style={{ width: '45rem',height:'10rem', marginTop:'5%' ,marginLeft:'25%'}}>
// //       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
// //       <Card.Body>
// //         <Card.Title>Card Title</Card.Title>
// //         <Card.Text>
// //         {data ? data.map(item => <div key={item.shopId}>{item.shopName}</div>) : 'Loading...'}
// //           {/* Some quick example text to build on the card title and make up the
// //           bulk of the card's content. */}
// //         </Card.Text>
// //         <Button variant="primary">Book Appointment</Button>
// //       </Card.Body>
// //     </Card>
// //     </div>

// //     <div>

// //     </div>

// //     </div>
// //   )
// // }

// // export default Home






// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useEffect, useState } from 'react';
// import Appointment from './Appointment';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// // import { Sidebar } from 'rsuite';
// import Sidebar from './Sidebar';
// function Home() {
//     const [data, setData] = useState(null);
//     const [userid, setUserid]=useState("");
// var Email = Cookies.get("Emailid");
// console.log(Email);
//     useEffect(() => {
//         axios.post('https://localhost:7209/api/User/api/FindEmail',{email:Email})
//         .then(res=>{
//             setUserid(res.data.userId);
//             console.log(res.data);
//             Cookies.set( "UserId", res.data.userId)
//         });

//         fetch('https://localhost:7209/api/RepairShop/Get')
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.error(error));

//     }, []);

//     return (
//         <div><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav>

//         <Sidebar/>
//             {data ? data.map(item => (
//                 <div key={item.shopId} style={{ marginTop: '5%', marginLeft: '25%' }}>
//                     <Card style={{ width: '45rem', height: '10rem' }}>
//                         <Card.Body>
//                             <Card.Title>{item.shopName}</Card.Title>
//                             <Card.Text>
//                                 <p>{item.email} </p>  <p>{item.shopContactNo}</p>
//                                 <p>{item.shopAddress}</p>
//                                 {/* Some quick example text to build on the card title and make up the
//                                 bulk of the card's content. */}
//                             </Card.Text>
//                             <Link to="/Appointment"><Button  variant="primary">Book Appointment</Button> </Link>

//                         </Card.Body>
//                     </Card>
//                 </div>
//             )) : 'Loading...'}
//         </div>
//     )
// }

// export default Home





// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Sidebar from './Sidebar';
// import { Link } from 'react-router-dom';

// function Home() {
//     const [data, setData] = useState(null);
//     const [search, setSearch] = useState("");
//     const [filteredData, setFilteredData] = useState(null);
//     const [userid, setUserid] = useState("");
//     var Email = Cookies.get("Emailid");

//     useEffect(() => {
//         axios.post('https://localhost:7209/api/User/api/FindEmail', { email: Email })
//             .then(res => {
//                 setUserid(res.data.userId);
//                 Cookies.set("UserId", res.data.userId)
//             });

//         fetch('https://localhost:7209/api/RepairShop/Get')
//             .then(response => response.json())
//             .then(data => {
//                 setData(data);
//                 setFilteredData(data);
//             })
//             .catch(error => console.error(error));
//     }, []);

//     useEffect(() => {
//         setFilteredData(
//             data?.filter(item =>
//                 item.shopName.toLowerCase().includes(search.toLowerCase())
//             )
//         );
//     }, [search, data]);

//     return (
//         <div>
//             <nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light">
//                 <h2 style={{ marginLeft: "3%" }}>Mobile Repair Web Application</h2>

//             <input
//                 type="text"
//                 placeholder="Search..."
//                 onChange={e => setSearch(e.target.value)}
//             />
//             </nav>

//             <Sidebar />


//             {filteredData ? filteredData.map(item => (
//                 <div key={item.shopId} style={{ marginTop: '5%', marginLeft: '25%' }}>
//                     <Card style={{ width: '45rem', height: '10rem' }}>
//                         <Card.Body>
//                             <Card.Title>{item.shopName}</Card.Title>
//                             <Card.Text>
//                                 <p>{item.email}</p>
//                                 <p>{item.shopContactNo}</p>
//                                 <p>{item.shopAddress}</p>
//                                 <p>Iphone</p>
//                             </Card.Text>
//                             <Link to="/Appointment"><Button variant="primary">Book Appointment</Button></Link>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             )) : 'Loading...'}
//         </div>
//     )
// }

// export default Home











import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Cookies from 'js-cookie';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';




function Home() {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(null);
    const [userid, setUserid] = useState("");
    const [mobileType, setMobileType] = useState("");
    var Email = Cookies.get("Emailid");
    
    function assignMobileType(data) {
        const mobileTypes = ['iPhone', 'Android'];
        return data.map(item => ({
            ...item,
            mobileType: mobileTypes[Math.floor(Math.random() * mobileTypes.length)]
        }));
    }

    useEffect(() => {
        axios.post('https://localhost:7209/api/User/api/FindEmail', { email: Email })
            .then(res => {
                setUserid(res.data.userId);
                Cookies.set("UserId", res.data.userId)
            });

        fetch('https://localhost:7209/api/RepairShop/Get')
            .then(response => response.json())
            .then(data => {
                const dataWithMobileType = assignMobileType(data);
                setData(dataWithMobileType);
                setFilteredData(dataWithMobileType);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        setFilteredData(
            data?.filter(item =>
                item.shopName.toLowerCase().includes(search.toLowerCase()) &&
                (mobileType === "" || item.mobileType === mobileType)
            )
        );
    }, [search, mobileType, data]);

    const BookAppointment =(shopId)=>{
            Cookies.set("shopId",shopId)
    }

    return (
        <div>
            <nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light">
                <h2 style={{ marginLeft: "3%" }}>Mobile Repair Web Application</h2>
                {/* <input
                type="text"
                placeholder="Search..."
                onChange={e => setSearch(e.target.value)}
            /> */}

                {/* <select onChange={e => setMobileType(e.target.value)}>
                <option value="">All</option>
                <option value="iPhone">iPhone</option>
                <option value="Android">Android</option>
            </select> */}

                <FormControl variant="filled" fullWidth style={{ width: "10%", marginLeft: "43%" }}>
                    <InputLabel id="demo-simple-select-label">Mobile Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={e => setMobileType(e.target.value)}

                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="iPhone">iPhone</MenuItem>
                        <MenuItem value="Android">Android</MenuItem>
                    </Select>
                </FormControl>


                <input style={{marginLeft:"2%",width:"10%"}} class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" 
                    onChange={e => setSearch(e.target.value)}

                   /> < SearchTwoToneIcon/>

            </nav>

            <Sidebar />

            {filteredData ? filteredData.map(item => (
                <div key={item.shopId} style={{ marginTop: '5%', marginLeft: '25%' }}>
                    <Card style={{ width: '45rem', height: '12rem' }}>
                        <Card.Body>
                       
                            <Card.Title>{item.shopName}</Card.Title>
                            <Card.Text>
                                <p>{item.email}</p>
                                <p>{item.shopContactNo}&nbsp;&nbsp;&nbsp;{item.shopAddress}</p>
                                <p></p>
                                <p>Mobile Type: {item.mobileType}</p>
                                <Link to="/Appointment"><Button style={{marginLeft:"70%",marginTop:"-10%"}}  onClick={()=>{BookAppointment(item.shopId)}} type='submit' variant='contained' color="secondary">Book Appointment</Button></Link>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            )) : 'Loading...'}
        </div>
    )
}

export default Home
