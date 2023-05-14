
import mongoose from "mongoose";
import app from "./app";



const port :number = 3000


//database connection 
// main().catch(err => console.log(err));

async function main() {
try{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log(`data connection successfully`);
}catch(err){
console.log(`data connection failed ${err}`);
}
 
  
}
main()




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})