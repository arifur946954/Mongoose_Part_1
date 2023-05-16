import express,{Application,Request,Response,NextFunction} from "express";

import cors from "cors"
import { Schema, model } from "mongoose";
const app : Application = express()

//application routes
import userRoutes from './app/modules/user/user.route'
app.use(cors());
//parse data 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/api/v1/user',userRoutes )
app.use('/api/v1/user',userRoutes )//userroutes name will be diffrent like userRouts 
   // 1. Create an interface representing a document in MongoDB.
   // 2. Create a Schema corresponding to the document interface.
   // 3. Create a Model.
     // 4. Connect to MongoDB

/*
aafter breakdown data
interfacr-->user.interface.ts
schema, module--->user.module.ts
route
route function--->user.controller.ts
databaser query ==>service



*/
 





 
//   createUserToDB()
 



  export default app;