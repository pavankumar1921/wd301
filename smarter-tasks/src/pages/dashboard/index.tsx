import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const userDataString = localStorage.getItem('userData')

    const userData = userDataString? JSON.parse(userDataString) : null

    const handleLogout = () =>{
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        navigate('/signin')
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
    <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Display user data if it exists */}
      {userData && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Name: {userData.name}</h2>
          <h2 className="text-lg font-semibold">Email: {userData.email}</h2>
        </div>
      )}
      <a
        id="logout-link"
        href="#"
        onClick={handleLogout}
        className="text-blue-500 hover:underline cursor-pointer"
      >
        Logout
      </a>
    </div>
  </div>
    
  );
}

export default Dashboard;