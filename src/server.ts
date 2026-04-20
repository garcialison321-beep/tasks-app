import { app } from "./app";
import { connectDB } from "./config/database";

const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});