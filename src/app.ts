import express,{Application,Request,Response,NextFunction} from "express";

import cors from "cors"
import { Schema, model } from "mongoose";
const app : Application = express()
app.use(cors());
//parse data 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req :Request, res :Response,next :NextFunction) => {
   // 1. Create an interface representing a document in MongoDB.
   // 2. Create a Schema corresponding to the document interface.
   // 3. Create a Model.
     // 4. Connect to MongoDB

     // 1. Create an interface representing a document in MongoDB.
  interface IUser {
    id:string;
    role:"student";
    name:{
        firstName:string;
        middleName?:string;
        lastName:string
    }
    gender:"male" | "female";
    email: string;
    contractNumber:string;
   
  }

  // 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    id: { type: String, required: true,unique:true },
    role: { type: String, required: true },
   name:{
    firstName:{ type: String, required: true},
    middleName:{ type: String},
    lastName:{ type: String, required: true}
   },
gender:{type:String,enum:['male','female']},

    email: { type: String, required: true },
    contractNumber: { type: String, required: true },
  });

  // 3. Create a Model.
const User = model<IUser>('User', userSchema);



  // 4. Connect to MongoDB

  const createUserToDB=async()=>{
    const user = new User({
        id:"103",
        role:"student",
        name:{
            firstName:"MD",
            middleName:"Afridi",
            lastName:"Ahmed"
        },
        gender:"male",
        email: "arif@gmail.com",
        contractNumber: "01719522846"
      });
      await user.save();
      console.log(user);

  }
  createUserToDB()
 

  })

  export default app;