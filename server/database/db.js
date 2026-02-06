import mongoose from "mongoose";



const Connection = async(username, password) =>{
    const URL=`mongodb+srv://${username}:${password}@clone-inshorts.tqtidb0.mongodb.net/?appName=clone-inshorts`;
    try {

        //await mongoose.connect(URL, {useNewUrlParser: true});
        await mongoose.connect(URL);
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log("Error while connecting to the database ", error);
    }

}
export default Connection;