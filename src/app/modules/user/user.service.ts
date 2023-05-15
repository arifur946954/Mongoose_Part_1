 // 4. Connect to MongoDB

import User from "./user.module";

 export const createUserToDB=async()=>{
    const user =await new User({
        id:"106",
        role:"student",
        name:{
            firstName:"MD",
            middleName:"shihacxb",
            lastName:"Ahmed"
        },
        gender:"male",
        email: "arifur@gdmail.com",
        contractNumber: "01712227113"
      });
      await user.save();
      console.log(user);

  }