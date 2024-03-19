import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import employeeRoute from './routes/employeeRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    console.log(req);
    return res.status(303).send('wlecome to mer stack turorial')
});

app.use('/employee', employeeRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected with data base');
        app.listen(PORT, () => {
    console.log(`My App is runnig on port ${PORT}`);
});
    }).catch((error) => {
      console.log(error);
    });

