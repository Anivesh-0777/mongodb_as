const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'OpeCurd';

const Data = [
    {
        
    
    "userId":"rirani",
    "jobTitleName":"Developer",
    "firstName":"Romin",
    "lastName":"Irani",
    "preferredFullName":"Romin Irani",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":"408-1234567",
    "emailAddress":"romin.k.irani@gmail.com"
    },
    {
    "userId":"nirani",
    "jobTitleName":"Developer",
    "firstName":"Neil",
    "lastName":"Irani",
    "preferredFullName":"Neil Irani",
    "employeeCode":"E2",
    "region":"CA",
    "phoneNumber":"408-1111111",
    "emailAddress":"neilrirani@gmail.com"
    },
    {
    "userId":"nirani2",
    "jobTitleName":"Developer2",
    "firstName":"Neil2",
    "lastName":"Irani2",
    "preferredFullName":"Neil Irani2",
    "employeeCode":"E22",
    "region":"CA2",
    "phoneNumber":"408-11111112",
    "emailAddress":"neilrirani@gmail.com2"
    },
    {
    "userId":"nirani3",
    "jobTitleName":"Developer3",
    "firstName":"Neil3",
    "lastName":"Irani3",
    "preferredFullName":"Neil Irani3",
    "employeeCode":"E23",
    "region":"CA3",
    "phoneNumber":"408-11111113",
    "emailAddress":"neilrirani@gmail.com3"
    },
    {
    "userId":"thanks",
    "jobTitleName":"Program Directory",
    "firstName":"Tom",
    "lastName":"Hanks",
    "preferredFullName":"Tom Hanks",
    "employeeCode":"E3",
    "region":"CA",
    "phoneNumber":"408-2222222",
    "emailAddress":"tomhanks@gmail.com"
    }
    
        
];

const client = new MongoClient(url);

async function createUser() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('Employee_Data');
    const res = await users.insertMany(Data);
    console.log('Successfully written records = ' + res.insertedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
    await client.close();
  }
}

createUser().catch(console.dir);