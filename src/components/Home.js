// import React from 'react'
// import Navbar from "./Navbar"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useEffect, useState } from 'react';


// function Home() {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//       fetch('https://localhost:7209/api/RepairShop/Get')
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error(error));
//     }, []);
  

//   return (
//     <div><Navbar/>
//     <div>
//     <Card style={{ width: '45rem',height:'10rem', marginTop:'5%' ,marginLeft:'25%'}}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//         {data ? data.map(item => <div key={item.shopId}>{item.shopName}</div>) : 'Loading...'}
//           {/* Some quick example text to build on the card title and make up the
//           bulk of the card's content. */}
//         </Card.Text>
//         <Button variant="primary">Book Appointment</Button>
//       </Card.Body>
//     </Card>
//     </div>

//     <div>
     
//     </div>
    
//     </div>
//   )
// }

// export default Home






import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Appointment from './Appointment';
import { Link } from 'react-router-dom';
// import { Sidebar } from 'rsuite';
import Sidebar from './Sidebar';
function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7209/api/RepairShop/Get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div><nav id="navbsp" className="navbar navbar-expand-lg navbar-light bg-light"><h2 style={{marginLeft:"3%"}}>Mobile Repair Web Application</h2></nav>
        <Sidebar/>
            {data ? data.map(item => (
                <div key={item.shopId} style={{ marginTop: '5%', marginLeft: '25%' }}>
                    <Card style={{ width: '45rem', height: '10rem' }}>
                        <Card.Body>
                            <Card.Title>{item.shopName}</Card.Title>
                            <Card.Text>
                                <p>{item.email} </p>  <p>{item.shopContactNo}</p>
                                <p>{item.shopAddress}</p>
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                            </Card.Text>
                            <Link to="/Appointment"><Button  variant="primary">Book Appointment</Button> </Link>
                            
                        </Card.Body>
                    </Card>
                </div>
            )) : 'Loading...'}
        </div>
    )
}

export default Home
