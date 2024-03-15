//  @code-snippet - 1

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to the database');
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const User = mongoose.model('User', userSchema);

// User.findOne({ name: 'John' }, function (err, user) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(user);
//   }
// });

// Error :- 
// Solution :- 

// ------------------------------------------------------------------------------------

// @code-snippet - 2

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send(`Hello ${process.env.NAME}`);
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// Error :- PORT and NAME not defined
// Solution :- need to import dotenv module

// --------------------------------------------------------------------------------------------

// @ code-snippet - 3

// const express = require('express');
// const app = express();

// const file = ["file"];

// app.get('/', (req, res) => {
//   res.send('Here is the file', file);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// Error :- 
// Solution :- 

// ---------------------------------------------------------------------------------------------------

// @code-snippet - 4

// const express = require('express');
// const multer = require('multer');
// const app = express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('file'), (req, res) => {
//   res.send('File uploaded successfully');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// Error :- 
// Solution :- 