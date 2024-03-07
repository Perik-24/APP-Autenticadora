import express from "express";
import cors from 'cors';
import router from './routes/index.js';


const app = express();



app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));

app.use(cors());

app.use('/api', router);

app.listen(4000, ()=>{
    console.log("Perik");
});