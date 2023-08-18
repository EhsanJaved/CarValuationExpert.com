import React, { useState, useEffect } from 'react';
import LoaderPage from './LoaderPage';
import './LP.css';

export default function Result({ data_Recived }) {
  const dataSend = JSON.stringify(data_Recived, null, 2);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the prediction result from the backend
    fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataSend,
    })
      .then(response => response.json())
      .then(result => {
        setData(result.prediction);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [dataSend]);

  return (
    <div className="content-card home">
      {loading ? (
        <LoaderPage />
      ) : (
        <div>
          <h1>Your Price Prediction is</h1>
          <p style={{ textAlign: 'center' }}>
            <h2>{data}</h2>
            <br />
            {/* {dataSend} */}
          </p>
        </div>
      )}
    </div>
  );
}
