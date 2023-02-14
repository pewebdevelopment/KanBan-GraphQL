const { default: mongoose } = require("mongoose");

let MongoDBRemoteURL = "";

let MongoDBLocalURL = "mongodb://127.0.0.1:27017/ZenGraphQL";

const MongoDBURL = MongoDBRemoteURL || MongoDBLocalURL;

async function connectwithDB() {
  try {
    await mongoose.connect(MongoDBURL, { keepAlive: true });

    console.log("Connection Established");
  } catch (err) {
    console.log("Err", err);
  }
}

module.exports = connectwithDB;
