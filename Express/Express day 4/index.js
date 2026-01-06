import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.routes.js'; //.js is imp 
import taskRoutes from './routers/task.routes.js';
const app = express();

app.use(cookieParser("varshaiscoding"));
app.use(express.json());
app.use(session(
    {
       secret :"mysecret" , // for session id security 
       /*  saveUninitialized decides whether a new but empty session should be saved to the session 
        store. if true - create empty session obj if false not create anything   */
       saveUninitialized : false ,   
       resave : false,
       cookie :{
        maxAge : 1000*60*60*24 //24 hours cookie expiry
       }

    }
))

//req,res only inside route handlers and middlewares

app.use("/api/v1/auth",authRouter);

app.use("/api/v1/task",taskRoutes);

app.listen(8000,()=>{
    console.log("server is running....");
    
})