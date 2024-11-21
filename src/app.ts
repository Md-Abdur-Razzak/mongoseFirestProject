import cors from 'cors';
import express, { Application } from 'express';
import { studentRouters } from './app/Module/student/student.router';
const app: Application = express();

app.use(express.json());
app.use(cors());

//--------api Routes--------
app.use('/api/v1/student', studentRouters);
app.use('/api/v1/allstudent', studentRouters);
app.use('/api/v1/findstudent', studentRouters);

app.get('/', (req, res) => {
  res.send('ggggggg');
});

export default app;
