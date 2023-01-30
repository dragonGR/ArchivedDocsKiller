# MongoDB Document Deleter

This is a node.js script that connects to a MongoDB database and deletes documents from a collection that have a specified condition.

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

4. Run the script:
```
node index.js
```

# Note

Make sure that MongoDB is running on the specified URI and port before executing the script.
The script uses the latest MongoDB driver for Node.js.

