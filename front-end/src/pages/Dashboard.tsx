import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/quizzes`);
        setQuizzes(response.data);
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
      }
    };
    fetchQuizzes();
  }, []);

  const handleDelete=async(quizId:number)=>{
    try {
        const response=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/quizzes/${quizId}`)
        toast.success(response.data?.message || "Quizz deleted successfully")
        setQuizzes(quizzes.filter((quzz:any)=>quzz.id!==quizId))
    } catch (error) {   
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Button onClick={() => navigate('/create-quiz')} className='font-semibold text-xl border-2 border-purple-100 cursor-pointer hover:border-2 hover:border-purple-300 '>+ New Quiz</Button>
      <div className="mt-4">
        {quizzes.map((quiz: any) => (
          <div key={quiz.id} className="shadow-md rounded bg-gray-300 p-4 mb-2">
            <h2 className="text-xl font-bold">{quiz.title}</h2>
            <p>{quiz.description}</p>
            <Button onClick={() => navigate(`/edit-quiz/${quiz.id}`)} className='bg-green-300 text-white mx-2 hover:bg-green-400 cursor-pointer'>Edit</Button>
            <Button onClick={()=>handleDelete(quiz.id)} className='bg-red-500 m-1 text-white hover:bg-red-600 cursor-pointer'>Delete</Button>
            <Toaster/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;