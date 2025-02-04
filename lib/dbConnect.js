const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shradha1512:89rBOAPGyXPkTYwL@cluster0.lrb8o.mongodb.net/",
      {
        dbName: "mongo-auth-db",
      }
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("failed to connect to database!");
  }
};

module.exports = dbConnect;