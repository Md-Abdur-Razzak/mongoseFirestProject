import { User } from "./student.interface";
import studentModel from "./student.modal";

const creataStudentDB = (student:User)=>{
 const result = studentModel.create(student)
 return result
}

const getAllStudent = ()=>{
    const result = studentModel.find()
    return result
}

export const studentDB = {
    creataStudentDB,
    getAllStudent
}