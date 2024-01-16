import openAi from "./Config.js";
import chatModel from "./Model.js";

export const postChat = async (req, res) => {
  try {
    const existChat = chatModel.findById(req.params.id);
    if (!existChat) throw Error("Invalid Chat Id");
    const completion = await openAi.chat.completions.create({
      messages: [{ role: "user", content: req.body.text }],
      model: "davinci-002",
    });
    console.log(completion.choices[0].message.content);
    const chat = {
      userText: req.body.text,
      gptResponse: completion.choices[0].message.content,
    };
    existChat.chat.push(chat);
    await existChat.save();
    res.status(200).json(existChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChat = async (req, res) => {
    try {
      const existChat = chatModel.findById(req.params.id);
      if (!existChat) throw Error("Invalid Chat Id");
      res.status(200).json(existChat);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getAllChat = async (req, res) => {
  try {
    const list = await chatModel.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChat = async (req, res) => {
  try {
    const newChat = new chatModel({
      userId: Id,
      chatName: req.body.name,
    });
    await newChat.save();
    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
