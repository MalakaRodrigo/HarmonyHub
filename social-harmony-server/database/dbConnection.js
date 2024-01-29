const mongoose = require('mongoose');

const mongoURL =
  process.env.MONGO_URL ||
  "mongodb+srv://malaka:nopassword@harmonyhub-1.6uw8lnm.mongodb.net/?retryWrites=true&w=majority";

let db; // To store the database connection


async function connectToDatabase() {
  try {
    mongoose.connect(mongoURL)
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = { connectToDatabase };
