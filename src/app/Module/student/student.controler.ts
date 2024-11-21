import { studentDB } from './student.service';
import { Request, Response } from 'express';

const crearaStudent = async (req: Request, res: Response) => {
  const result = req.body;
  const userData = await studentDB.creataStudentDB(result);
  res.status(200).json({
    sucess: true,
    message: 'creat a student sucessfull',
    data: userData,
  });
};

const getAllStudentController = async (req: Request, res: Response) => {
  const result = await studentDB.getAllStudent();
  res.status(200).json({
    sucess: true,
    message: 'All User getting sucessfully',
    data: result,
  });
};

const findOneUserControllesr = async (req: Request, res: Response) => {
  const id = req.params.id;
  const reult = await studentDB.findStudent(id);
  res.status(200).json({
    sucess: true,
    message: 'finding on user sucessfully',
    data: reult,
  });
};
export const studentController = {
  crearaStudent,
  getAllStudentController,
  findOneUserControllesr,
};
