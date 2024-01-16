import express from "express";
import { getAllChat, createChat, getChat, postChat } from "./Controller.js";
const chatRoute = express.Router();
// chatRoute.post("/create", createChat);
chatRoute.route("/chats").get(getAllChat).post(createChat);
chatRoute.route("/chat/:id").get(getChat).post(postChat);
export default chatRoute;
