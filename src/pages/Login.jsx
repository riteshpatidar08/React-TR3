import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    const isLogin = true;
    if (isLogin) {
      navigate('/');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
