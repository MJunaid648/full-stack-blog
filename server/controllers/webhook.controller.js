import { Webhook } from "svix";
import User from "../models/user.model.js";

export const clertWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) throw new Error("Clerk Webhook secret needed!");

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let event;
  try {
    event = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({ message: "Invalid webhook signature" });
  }

  // console.log(event.data)
  if (event.type === "user.created") {
    const newUser = new User({
      clerkUserId: event.data.id,
      username:
        event.data.username || event.data.email_addresses[0].email_address,
      email: event.data.email_addresses[0].email_address,
      img: event.data.profile_image_url,
    });

    const res = await newUser.save();
    console.log("res: ", res);
  }

  res.status(200).json({ message: "Webhook received" });
};
