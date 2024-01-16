import mongoose, { Mongoose } from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
  try {
    if (connection.isConnected) return;
    const db: Mongoose = await mongoose.connect(process.env.MONGO as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
};
