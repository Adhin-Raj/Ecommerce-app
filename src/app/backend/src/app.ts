import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import authRouter from "./routes/auth.route";

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

export default app;
