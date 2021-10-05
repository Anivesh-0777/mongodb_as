
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'OpeCurd';
const client = new MongoClient(url);


async function UpdateUser(){
    try{
        await client.connect()
        const database= client.db(dbName)
        const users = database.collection('Employee_Data');
        const res = await users.updateMany(
            { firstName: 'Neil2' },
            { $set: { firstName: 'Updated Neil' }}
                    )
        console.log(res);
    }

    
    catch(e){
        console.log(e)
    }
    finally{
        console.log("done")
        await client.close();
    }
}
UpdateUser().catch(console.dir);