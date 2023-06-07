import express from 'express';
import flightRouter from './router/flightRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/flight', flightRouter);

app.all('*', (req,res,next) =>{
    res.status(404).json({error:"Requested Page Not Found"});
});

app.listen(PORT, ()=>{
    console.log("Server listening");
});