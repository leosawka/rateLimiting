import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";

function App() {
  const [message, setMessage] = useState('');
  const [successCount, setSuccessCount] = useState(0);

  const handleBuyCorn = async () => {
    try {
      const response = await axios.post('http://localhost:3001/buy-corn');
      setMessage(response.data);
      setSuccessCount(successCount + 1);
    } catch (error) {
      setMessage(error.response?.data || 'Error');
    }
  };

  return (
    <div style={{ padding: '2rem', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <h1>Bob's Corn Shop</h1>
      <Button onClick={handleBuyCorn} variant="default">
        Buy Corn
      </Button>
      <p style={{ marginTop: '1rem' }}>{message}</p>
      <p>Total Corn Bought: {successCount}</p>
    </div>
  );
}

export default App;
