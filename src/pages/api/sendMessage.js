import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { message } = req.body;
    const botToken = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `Букет ${message.name} за ${message.price} рублей`
        }
      );
      console.log(response);

      if (response.status === 200) {
        res.status(200).json({ success: true, data: response.data });
      } else {
        res
          .status(response.status)
          .json({ success: false, data: response.data });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
