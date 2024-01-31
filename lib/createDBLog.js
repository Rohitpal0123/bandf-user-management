const winston = require("winston");
const { combine, timestamp, json } = winston.format;
require("winston-mongodb");
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);
async function createDBLog() {
  try {
    await client.connect();
    const dbLogger = winston.createLogger({
      level: "info",
      format: combine(timestamp(), json()),
      transports: [
        new winston.transports.MongoDB({
          db: uri,
          collection: "accessLog",
          metaKey: "details",
        }),
      ],
    });

    if (!dbLogger) throw "User not logged in DB!";

    return dbLogger;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    throw error;
  }
}

module.exports = createDBLog;
