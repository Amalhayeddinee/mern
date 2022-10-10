import express, { json } from "express"
import dotenv from "dotenv"
  import authRouter from './routes/auth.js'
  import cookieParser from "cookie-parser";
 import roomsRouter from './routes/rooms.js'
  import hotelsRouter from './routes/hotels.js'
 import usersRouter from './routes/users.js'
 import mongoose from "mongoose"
 import cors from "cors";

 const app=express()
  dotenv.config()
 
 

  app.use(cors())
  app.use(cookieParser())

 
   const connectt =async()=>{
     try {
  mongoose.connect(process.env.MONGO)
     console.log("coonected ")
}catch (error){
   console.log('erorrr')
}}
// mongoose.Connection.on("disconnection",()=>{
//     console.log('first app is disconnection ')
// })
 app.get('/users',(req,res)=>{
    res.send('first app')
     next ()
 })
app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/hotels",hotelsRouter)
app.use("/api/rooms",roomsRouter)
app.use((err,req,res,next)=>{
     const errorStatus = err.status ||500;

     const errorMessages = err.message ||"Somethings went wrong";
   return (res.status(errorStatus).json({
succes:false,
status:errorStatus,
 message:errorMessages,
 stack:err.stack,



   })
)})





  app.listen(process.env.PORT,()=>{
     connectt();
    console.log('first akkkkkkkkpp ')
  })