
import { studentDB } from "./student.service"
import express, { Request, Response } from "express";

const crearaStudent = async(req:Request,res:Response)=>{
    const result = req.body
    const userData = await studentDB.creataStudentDB(result)
    res.status(200).json({
        sucess:true,
        message:"creat a student sucessfull",
        data : userData
    })
}

const getAllStudentController = async(req:Request,res:Response)=>{
    const result = await studentDB.getAllStudent()
    res.status(200).json({
        sucess:true,
        message :"All User getting sucessfully",
        data : result
    })
}
export const studentController =  {crearaStudent,getAllStudentController}