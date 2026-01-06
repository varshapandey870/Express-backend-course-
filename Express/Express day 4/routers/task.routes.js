import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const taskRoutes = Router()

taskRoutes.post("/" , authMiddleware , createTask)

taskRoutes.get("/" , authMiddleware , getAllTasks)


export default taskRoutes


/* ---------  after  login and creating task etc once when we want to do the task for second time then it 
will so unauthorized becuase here we are using arrays for storing the data and  for every post req the server 
reloads(hot reload) and by that the data and session dont persists so thats why we need a database ........   
 ----------- */