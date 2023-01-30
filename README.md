# MongoDB Document Deleter

This is a Node.js script that connects to a MongoDB database and performs document deletions on a specified collection. The script uses the MongoDB driver for Node.js to connect to the database and specify the target collection. A query condition is set to determine which documents should be deleted based on the value of a specified field.

The script then executes a deleteMany method to delete multiple documents that meet the specified condition. A callback function is provided to handle the result of the deletion operation and log the number of deleted documents to the console. The script closes the database connection after the operation is complete.

## Usage

1. Install the required dependencies:
```
npm install mongodb
```

2. Set the connection URI for the MongoDB server:
```
const uri = 'mongodb://<URL>:<port>';
```

3. Define the database name and collection name:
```
const db = client.db('John');
const products = db.collection('Connor');
```

4. Define the condition for document deletion.

This one below deletes documents in the "products" collection where the "createdAt" value is less than the value of the "yesterday" variable. In short, it will delete all the old documents besides Today's ones:
```
products.deleteMany({ createdAt: { $lt: yesterday } }, (err, result) => { ... });
```

5. Run the script:
```
node index.js
```

# Note

Before executing the script, it is important to ensure that MongoDB is running on the specified URI and port. The script uses the latest MongoDB driver for Node.js, so make sure to have the necessary dependencies installed.