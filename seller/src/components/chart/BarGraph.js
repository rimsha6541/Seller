import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  // Example data for monthly revenue
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [1500, 2000, 2500, 1800, 2200, 1900],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Monthly Revenue</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarGraph;
