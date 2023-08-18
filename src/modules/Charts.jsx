import React, {useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from your Flask API endpoint
    fetch('/charts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
      
  }, []);
  // console.log(data)
  const filteredYears = Object.keys(data).filter(year => parseInt(year) >= 2000 && parseInt(year) <= 2023);
  const filteredData = filteredYears.reduce((obj, year) => {
    obj.labels.push(year);
    obj.data.push(data[year]);
    return obj;
  }, { labels: [], data: [] });

  const lineChartData = {
    labels: filteredData.labels,
    datasets: [
      {
        label: 'Avrage Yearly Prices',
        data: filteredData.data,
        borderColor: 'rgba(0,0,0)',
        fill: true,
      },
    ],
  };

  return (
    
    <div style={{ padding: '100px' }}>
      <Line data={lineChartData} style={{paddingBottom:"20px"}} />
      <p>
      The chart above offers a clear representation of the relationship between car prices and manufacturing years. By analyzing the scatter plot, we can observe trends and patterns that indicate how car prices have changed over time. The spread of points provides insights into the price variability for different years. Overall, this visualization offers an at-a-glance understanding of the dataset and helps identify any potential correlations or anomalies.
      </p>
    </div>
  );
};

export default LineChart;