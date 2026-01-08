import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import { User } from "../models/user.model";

export const authCallback = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { firstName, lastName,emailAddress } = req.body;

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      await User.create({
        clerkId: userId,
        firstName,
        lastName,
        emailAddress
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({ success: false });
  }
};
