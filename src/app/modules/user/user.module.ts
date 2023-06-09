import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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
export default User;
