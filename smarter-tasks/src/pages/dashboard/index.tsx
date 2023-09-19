import React from 'react';


const Dashboard: React.FC = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <h2>Name:{userData.name}</h2>
    <h2>Email:{userData.email}</h2>
    </div>
    
  );
}

export default Dashboard;