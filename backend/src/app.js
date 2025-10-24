import express from "express";
import cors from "cors";

const app = express();

// 🔓 Permitir peticiones desde el frontend
app.use(cors());
app.use(express.json());

// ✅ Ruta de prueba
app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend funcionando correctamente 🚀" });
});

// 🔥 Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
