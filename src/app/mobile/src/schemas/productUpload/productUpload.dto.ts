import * as z from "zod";
import { ProductUploadSchema } from "./productUpload";

export type ProductType = z.infer<typeof ProductUploadSchema>;
