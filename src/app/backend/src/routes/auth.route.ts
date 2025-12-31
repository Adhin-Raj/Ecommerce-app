import { requireAuth } from "@clerk/express";
import { Router } from "express";
import { authCallback } from "../controller/auth.controller";

const router = Router();

router.post("/callback", requireAuth(), authCallback);

export default router;
