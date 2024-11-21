import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type nameType = {
    firestName : string
    middleName?:string
    lastName?:string
  }

export type gardiantType =  {
    fatherName : string
    motherName : string
  }

export type User = {
  id : string
  name: nameType
  email: string;
  gender : "male" | "famale"
  RollNumber : number,
  presentAddress : string
  parmanentAddress:string,
  contactNo : string,
  emergencyContact : string,
  bloodGroup?: "A+" | "B+" | "O+"
  gardiant : gardiantType
 
}
