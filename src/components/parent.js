import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParentComponent = () => {
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
        <>
            <RepairShop services={services} />
            <UserAppointment services={services} />
        </>
    );
};

const RepairShop = ({ services }) => {
    // Use services here
};

const UserAppointment = ({ services }) => {
    // Use services here
    // For example, to display repair_Status of each service:
    return (
        <table className="table">
            {/* ... */}
            <tbody>
                {services.map(service => (
                    <tr key={service.serviceId}>
                        {/* ... */}
                        <td>{service.repair_Status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ParentComponent;