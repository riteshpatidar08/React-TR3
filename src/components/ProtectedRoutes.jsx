import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function ProtectedRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ProtectedRoutes;
