import * as z from "zod";
import { LoginSchema } from "./login";

export type LoginType = z.infer<typeof LoginSchema>;
