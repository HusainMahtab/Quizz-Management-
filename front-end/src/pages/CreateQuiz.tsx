import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import toast, { Toaster } from 'react-hot-toast';

const CreateQuiz: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title && !description) {
      toast.error("All fields are required");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/quizzes`, {
        title,
        description,
        teacher_id: 1, // Static teacher ID for demo
      });
      toast.success("quiz create successfully")
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to create quiz:', error);
      toast.error("Error quiz not created")
    }
  };

  return (
    <div className="p-4 w-full flex justify-center">
     <div className='w-[300px] shadow-md rounded bg-gray-300 p-4'>
      <h1 className="text-2xl font-bold mb-4">Create New Quiz</h1>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 bg-slate-100"
        required
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 bg-slate-100"
        required
      />
      <Button onClick={handleSubmit} className='bg-white shadow-lg cursor-pointer'>Create</Button>
      <Toaster/>
     </div>
    </div>
  );
};

export default CreateQuiz;