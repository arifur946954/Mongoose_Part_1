
     // 1. Create an interface representing a document in MongoDB.
export interface IUser {
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