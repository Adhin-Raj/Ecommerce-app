import { Request, Response } from "express";
import { User } from "../models/user.model";

export const allUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
  }
};
