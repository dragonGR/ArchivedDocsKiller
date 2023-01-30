// This code is a node.js script that connects to a MongoDB database and deletes documents from the "products" collection
// that have a "createdAt" value less than yesterday's date (set to midnight).

// Import the MongoClient module from the mongodb library and create a URI
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://<URL>:<PORT>';

// Create a new instance of MongoClient with the given URI and options to use new URL parser and unified topology
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server and if theres an error, throw it
client.connect(err => {
  if (err) throw err;

// Get the 'harold' database from the MongoDB server
  const db = client.db('John');

// Get the 'products' collection from the 'harold' database
  const products = db.collection('Connor');

// Create a date object for yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 0);
  yesterday.setHours(0, 0, 0, 0);

// Delete all documents from the 'products' collection that have a "createdAt" value less than yesterday's date
  products.deleteMany({ createdAt: { $lt: yesterday } }, (err, result) => {

// If there's an error, throw it
    if (err) throw err;

// Log the number of documents deleted & Close the connection.
    console.log(`Deleted ${result.deletedCount} documents.`);
    client.close();
  });
});
