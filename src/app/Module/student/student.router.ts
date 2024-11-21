import express from 'express';
import { studentController } from './student.controler';
// Parses incoming JSON requests
const studentRouter = express.Router();
studentRouter.post('/creat-student', studentController.crearaStudent);
studentRouter.get('/all-student', studentController.getAllStudentController);
studentRouter.get('/:id', studentController.findOneUserControllesr);
export const studentRouters = studentRouter;
