import * as z from "zod";
import { SignupSchema } from "./signup";

export type SignUpType = z.infer<typeof SignupSchema>;
