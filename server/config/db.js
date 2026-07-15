const db = async () => 
{
    try 
    {
        await mongoose.connect('mongodb://localhost:27017/StudentDB');
        console.log("Connected to MongoDB");
    } 
    catch (error) 
    {
        console.log(error,"error.message");
    }
};
export default db;
