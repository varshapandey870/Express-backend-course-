import { Router } from "express";
import { User } from "../models/User.model.js";
import jwt from "jsonwebtoken";


const router = Router();

router.post("/register" , async ( req , res ) => {
    
    const { username, password } = req.body;
    try {
    
    if (!username || !password) {
      return res.status(400).json({ message: "Required all the fields " });
    }

    const existingUser = await User.findOne({username});

    if (existingUser) {
      return res.status(400).json({
        message: "User with this username already exists",
      });
    }

    const user = new User({ username, password });
    await user.save(); //after .save() the pre hook will be called internally and password will be hashed
    
    res.status(201).json({
      message: "User registered successfully",
      
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

router.post("/login" , async (req , res ) => {
     const {username , password} = req.body;
     try{
       if(!username || !password) {
        return res.status(401).json({message : "all fields are required"});
       }

       const user = await User.findOne({username}) ;

       if(!user) {
        return res.status(401).json({message : "user not exists"});
       }

       //pass matching 
       const ismatch = await user.comparepassword(password) ;

       if(!ismatch) return res.status(401).json({message : "Invalid username or password"}) ;

       //now username and id are valid so we a token will be generated 
       const token = jwt.sign({id:user._id , username:user.username}, process.env.JWT_SECRET , {expiresIn : "1hr"})
       
       res.status(200).json({message: "logged in successfully" , token});


     
    } catch(error){
       res.status(500).json({ error: error.message });
     }




});

export default router;