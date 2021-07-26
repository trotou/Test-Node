import express from "express";
import cors from "cors";
import { createServer } from "http";
import { createServer as _createServer } from "https";
import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const httpServer = createServer(app);
httpServer.listen(3333);

export default { app };
