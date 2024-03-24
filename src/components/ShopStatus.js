import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    const apiEndpoint = 'https://localhost:7209/api/Post/Mobile/Get';

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {data ? (
        data.map(item => (
          <div key={item.userId}>
            {/* Render your data here */}
            <p>{item.Name}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;