import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import toast, { Toaster } from 'react-hot-toast';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      toast.success(response.data?.message || "Login Succeessfully")
      setTimeout(()=>{
        navigate("/dashboard")  
      },500)
    } catch (error) {
      console.error('Login failed:', error);
      toast.error("Login Error")
    }
  };

  return (
    <div className='w-full flex justify-center'>
     <div className="w-[400px] p-4 shadow-lg bg-slate-200 mt-8 rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 bg-slate-100"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 bg-slate-100"
      />
      <Button onClick={handleLogin} className='border bg-slate-400 border-slate-400 hover:border-slate-600 cursor-pointer rounded shadow-lg'>Login</Button>
      <Toaster/>
    </div>
    </div>
   
  );
};

export default Login;