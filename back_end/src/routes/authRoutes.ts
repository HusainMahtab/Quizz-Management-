import express from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../models/User';

const router = express.Router();

// create users
router.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    try {
        const userRepository = AppDataSource.getRepository(User);
        const isUserExist=await userRepository.findOne({where:username})
        if(isUserExist){
              res.status(400).json({message:"user already exist",successs:false})
        }
        const user=userRepository.create({
            username,
            password
        })
        
    } catch (error) {
        
    }
})

  
// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({where:{username}});
    if(user?.username==="teacher" && user.password==="admin"){
        res.status(200).json({ message: 'Login successful' });
    }else{
        res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;