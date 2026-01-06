import { requireAuth } from "@clerk/express";
import { Router } from "express";
import { allUsers } from "../controller/admin.controller";

const router = Router();

router.get("/getAllUsers", requireAuth(), allUsers);

export default router;
