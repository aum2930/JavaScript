// Select the database to use.
use('sigmaDatabase');  // it will create a new database of name sigmaDatabase.

// Insert a few documents into the courses collection of the created database.
db.getCollection('courses').insertMany([
        {
          "_id": "6765e2c6c1e38643d758ed02",
          "name": "Java",
          "Price": 20000,
          "Instructor": "Harry"
        },
        {
          "_id": "6765e2c6c1e38643d758ed03",
          "name": "Python",
          "Price": 15000,
          "Instructor": "Alice"
        },
        {
          "_id": "6765e2c6c1e38643d758ed04",
          "name": "JavaScript",
          "Price": 18000,
          "Instructor": "Bob"
        },
        {
          "_id": "6765e2c6c1e38643d758ed05",
          "name": "C++",
          "Price": 17000,
          "Instructor": "Charlie"
        },
        {
          "_id": "6765e2c6c1e38643d758ed06",
          "name": "React",
          "Price": 22000,
          "Instructor": "David"
        },
        {
          "_id": "6765e2c6c1e38643d758ed07",
          "name": "Node.js",
          "Price": 20000,
          "Instructor": "Eve"
        },
        {
          "_id": "6765e2c6c1e38643d758ed08",
          "name": "Angular",
          "Price": 24000,
          "Instructor": "Frank"
        },
        {
          "_id": "6765e2c6c1e38643d758ed09",
          "name": "SQL",
          "Price": 14000,
          "Instructor": "Grace"
        },
        {
          "_id": "6765e2c6c1e38643d758ed0a",
          "name": "Ruby",
          "Price": 16000,
          "Instructor": "Hank"
        },
        {
          "_id": "6765e2c6c1e38643d758ed0b",
          "name": "Kotlin",
          "Price": 21000,
          "Instructor": "Ivy"
        }      
]);

console.log(`Data inserted successfully`);
