import express from "express";
import cors from "cors";
import palabrasRoutes from "./routes/palabras.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

// Endpoints
app.use(indexRoutes);
app.use('/api',palabrasRoutes);

app.get("/", async (req, res) => {
    res.json({ status: "Backend Funcionando" });
    });

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found',
    })
})

export default app;