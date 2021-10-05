const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'OpeCurd';

const client = new MongoClient(url);

async function deleteUser() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('Employee_Data');
    const todelete = await users.deleteMany({
        firstName: { $in: ["Neil3","Neil"] },
    });
    console.log('Successfully deleted records = ' + todelete.deletedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
    await client.close();
  }
}

deleteUser().catch(console.dir);