import * as z from "zod";
import { SignInSchema } from "./login";

export type SignInType = z.infer<typeof SignInSchema>;
