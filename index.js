import express from "express";
import "dotenv/config";
import cors from "cors";
import warehouseRoutes from "./routes/warehousesRoutes.js";
const PORT = process.env.PORT || 8080;
import inventoryRoutes from "./routes/inventoriesRoutes.js";

/* CONFIG */
const PORT = process.env.PORT || 8080;
const app = express();

/* MIDDLEWARE */
app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);
app.use(express.json());

/* ROUTES */
app.use("/warehouses", warehouseRoutes);
app.use("/warehouses", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
