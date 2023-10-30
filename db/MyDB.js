import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MyDB = () => {
  const uri = process.env.MONGO_URL;
  const myDB = {};

  const connect = () => {
    const client = new MongoClient(uri);
    const db = client.db("");
    return { client, db };
  };










  return myDB;
};

export const myDB = MyDB();