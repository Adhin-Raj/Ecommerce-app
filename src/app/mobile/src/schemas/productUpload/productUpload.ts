import { Categories } from "@/src/constants";
import * as z from "zod";
const ImageFileSchema = z.object({
  uri: z.string(),
  type: z.string(),
  name: z.string(),
});

export const ProductUploadSchema = z.object({
  productName: z.string().min(3, "name should be atleast 3 characters"),
  brandName: z.string().min(1, "last name should be atleast 1 character"),
  category: z.enum(Categories),
  productImage: z
    .array(ImageFileSchema)
    .min(1, "At least one product image is required")
    .max(4, "Maximum 4 images allowed"),
  price: z.string(),
  sellingPrice: z.string(),
  description: z.string(),
});
