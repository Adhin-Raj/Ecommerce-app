import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import authRouter from "./routes/auth.route";
import adminRouter from './routes/admin.route'

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(clerkMiddleware());
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);

export default app;
