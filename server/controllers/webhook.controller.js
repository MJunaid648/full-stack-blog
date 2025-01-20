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
    res.status(400).json({ message: "Invalid webhook signature!" });
  }

  // console.log(event.data);

  if (event.type === "user.created") {
    try {
      const newUser = new User({
        clerkUserId: event.data.id,
        username:
          event.data.username || event.data.email_addresses[0].email_address,
        email: event.data.email_addresses[0].email_address,
        img: event.data.profile_image_url,
      });

      const saveResult = await newUser.save();
      console.log("User saved:", saveResult);
      return res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
      console.log("Error saving user:", err);
      return res.status(500).json({ message: "Failed to save user" });
    }
  } else {
    console.log("Received non-user.created event");

    res.status(200).json({ message: "Webhook received" });
  }
  res.status(200).json({ message: "Webhook received" });
};
