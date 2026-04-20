import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import v1Routes from "./api/v1";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1", v1Routes);

const startServer = async () => {
  await connectDB(); 

  app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT}`);
  });
};

startServer();