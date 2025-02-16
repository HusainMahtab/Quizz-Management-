import express from 'express';
import { AppDataSource } from '../data-source';
import { Quiz } from '../models/Quiz';

const router = express.Router();

// Create a quiz
router.post('/', async (req, res) => {
  const { title, description, teacher_id } = req.body;
  console.log("title",title,"description",description,"teacherid",teacher_id)
  try {
    const quizRepository = AppDataSource.getRepository(Quiz);
    console.log("quiz",quizRepository)
    const quiz = quizRepository.create({ title, description, teacher: { id: teacher_id } });
    await quizRepository.save(quiz);
    res.status(201).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizRepository = AppDataSource.getRepository(Quiz);
    const quizzes = await quizRepository.find({ relations: ['teacher'] });
    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single quiz
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quizRepository = AppDataSource.getRepository(Quiz);
    const quiz = await quizRepository.findOne({ where: { id: Number(id) }, relations: ['teacher'] });
    res.status(200).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a quiz
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const quizRepository = AppDataSource.getRepository(Quiz);
    const quiz = await quizRepository.findOne({ where: { id: Number(id) } });
    if (quiz) {
      quiz.title = title;
      quiz.description = description;
      await quizRepository.save(quiz);
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ message: 'Quiz not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a quiz
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const quizRepository = AppDataSource.getRepository(Quiz);
    await quizRepository.delete(id);
    res.status(200).json({ message: 'Quiz deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;