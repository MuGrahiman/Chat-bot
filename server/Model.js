import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    chatName:String,
    chat: [{ userText: String, gptResponse: String }],
  },
  { timestamps: true }
);
export default mongoose.model("chat", chatSchema);
