import { Schema, model, connect } from 'mongoose';
import { gardiantType, nameType, User } from './student.interface';

const nameSchema = new Schema<nameType>(
    {
        firestName:{type:String,required:true},
        middleName:{type:String},
    }
)

const gardiantSchema = new Schema<gardiantType>(
    {
        fatherName:{type:String,required:true},
        motherName:{type:String,required:true}
    }
)

const studentSchema = new Schema<User>({
    id:{type:String},
    name:nameSchema,
    email:{type:String,required:true},
    gender :["male","famale"],
    RollNumber : {type:Number,required:true},
    presentAddress : {type:String,required:true},
    parmanentAddress:{type:String,required:true},
    contactNo : {type:String,required:true},
    emergencyContact : {type:String,required:true},
    bloodGroup: ["A+","B+","O+"],
    gardiant :gardiantSchema,

})

const studentModel = model<User>('studentModel', studentSchema);
 export default studentModel
