const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'OpeCurd';
const client = new MongoClient(url);


async function ReadUser(){
    try{
        await client.connect()
        const database= client.db(dbName)
        const users = database.collection('Employee_Data');
        const value=await users.find( { firstName: { $in: [ "Neil2" ] } } ).toArray();
        console.log(value)


    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log("done")
        await client.close();
    }
}
ReadUser().catch(console.dir);