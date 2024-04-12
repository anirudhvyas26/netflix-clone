const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then((_) => {
//     console.log("DB connection successful")

// })

const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  username: String,
  email: String,
  age: Number,
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected to MongoDB');

  try {
    // Add sample users
    await User.create([
      { username: 'user1', email: 'user1@example.com', age: 25 },
      { username: 'user2', email: 'user2@example.com', age: 30 },
      { username: 'user3', email: 'user3@example.com', age: 35 },
    ]);

    console.log('Sample users added successfully');

    // Query all users
    const users = await User.find();
    console.log('All users:', users);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    mongoose.disconnect();
  }
});


app.listen(8800, () => {
  console.log("Backend server is running");

});
