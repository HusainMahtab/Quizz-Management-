import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import toast, { Toaster } from 'react-hot-toast';

const EditQuiz: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/quizzes/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        console.error('Failed to fetch quiz:', error);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleSubmit = async () => {
    if(!(title && description)){
      toast.error("All fileds are required")
      return
    }
    try {
      await axios.put(`http://localhost:5000/api/quizzes/${id}`, {
        title,
        description,
      });
      toast.success("update successfully")
      setTimeout(()=>{
        navigate('/dashboard');
      },500)
    } catch (error) {
      console.error('Failed to update quiz:', error);
    }
  };

  return (
    <div className="p-4 w-full flex justify-center">
      <div className='w-[300px] shadow-md rounded bg-gray-300 p-4'>
      <h1 className="text-2xl font-bold mb-4">Edit Quiz</h1>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 bg-slate-100"
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 bg-slate-100"
      />
      <Button onClick={handleSubmit} className='bg-green-500 text-white hover:bg-green-600'>Update</Button>
      <Toaster/>
      </div>
    </div>
  );
};

export default EditQuiz;