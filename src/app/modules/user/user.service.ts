 // 4. Connect to MongoDB

import { IUser } from "./user.interface";
import User from "./user.module";

 export const createUserToDB=async(payload:IUser):Promise<IUser>=>{
    const user =await new User(payload);
    //   {  id:"108",
    //     role:"student",
    //     name:{
    //         firstName:"receip",
    //         middleName:"Taiep",
    //         lastName:"arodogan"
    //     },
    //     gender:"male",
    //     email: "arodogan@gdmail.com",
    //     contractNumber: "01966773464"

    // }
  
      await user.save();
     return user;

  }

 export const getUserFromDB=async():Promise<IUser[]>=>{
    const users = await User.find();//when i need all data then inside find is blank
    return users;
  }
 export const getUserByIdFromDB=async(payload:string):Promise<IUser | null>=>{
    const user=await User.findOne({id:payload},{name:1,email:1})
    return user;
  }