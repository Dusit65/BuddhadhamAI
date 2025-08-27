const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");

// ถาม
exports.ask = async (req, res) => {
  try {
    const { chatId, question, k, d } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Question is required." });
    }

    // 1. ส่ง request ไป main.py เพื่อสร้างงาน
    const resData = await axios.post("http://" + process.env.AI_SERVER + ":" + process.env.AI_SERVER_PORT + "/ask", {
      args: [
        question,
        ...(k != null ? ["-k", k.toString()] : []),
        ...(d != null ? ["-d", d.toString()] : []),
      ],
    });

    const { taskId } = resData.data;
    console.log("Job queued:", taskId);

    // 2. คืนค่าไปก่อนเลย (ไม่ต้องรอให้รันเสร็จ)
    return res.status(202).json({
      message: "Job queued",
      taskId: taskId,
      chatId,
      question,
      ...(k != null ? { k } : {}),
      ...(d != null ? { d } : {}),
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      message: "Unexpected error: " + error.message,
      stack: error.stack,
    });
  }
};

exports.cancel = async (req, res) => {
  const { taskId } = req.body;

  if (!taskId) {
    return res.status(400).json({ message: "taskId is required" });
  }

  try {
    // ส่ง request ไป main.py
    const response = await axios.post("http://" + process.env.AI_SERVER + ":" + process.env.AI_SERVER_PORT + "/cancel/" + taskId);

    // ส่งผลกลับ client
    return res.status(200).json({
      message: "Cancel request sent",
      taskId,
      mainResponse: response.data,
    });

  } catch (error) {
    console.error("Error cancelling job:", error.message);
    return res.status(500).json({
      message: "Failed to cancel job",
      error: error.message,
    });
  }
};

// ดึงข้อความแชททั้งหมด
exports.getAllqNa = async (req, res) => {
  try {
    const chats = await prisma.qNa_tb.findMany(); // ดึงข้อมูลทั้งหมดโดยไม่มีการกรอง
    res.status(200).json({ message: "All chats found", data: chats });
  } catch (error) {
    console.error("Error fetching chats: ", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
};

// ดึงข้อความแชทของ user
exports.getqNaByUserId = async (req, res) => {
  try {
    const chats = await prisma.qNa_tb.findMany({
      where: { userId: Number(req.params.userId) },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ message: "ดึงข้อความแชทของผู้ใช้สำเร็จ", data: chats });
  } catch (error) {
    console.error("Error fetching chats by user: ", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
};

// ดึงข้อความแชทเฉพาะข้อความเดียว
exports.getqNa = async (req, res) => {
  try {
    const chat = await prisma.qNa_tb.findUnique({
      where: { chatId: Number(req.params.chatId) },
      include: {
        user: {
          select: {
            userName: true,
            userImage: true,
          },
        },
      },
    });

    if (!chat) {
      return res.status(404).json({ message: "ข้อความแชทไม่พบ" });
    }

    res.status(200).json({
      message: "ข้อความแชทพบ",
      data: { chat, user: chat.user },
    });
  } catch (error) {
    console.error("Error fetching chat: ", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
};

// ลบข้อความแชท
exports.deleteqNa = async (req, res) => {
  try {
    const chat = await prisma.qNa_tb.findUnique({
      where: { qNaId: Number(req.params.qNaId) },
    });

    if (!chat) {
      return res.status(404).json({ message: "ไม่พบ qNaID:" + req.params.qNaId });
    }

    const deletedqNa = await prisma.qNa_tb.delete({
      where: { qNaId: Number(req.params.qNaId) },
    });

    res.status(200).json({
      message: "ลบข้อความแชทสำเร็จ",
      data: deletedqNa,
    });
  } catch (error) {
    console.error("Error deleting qNa: ", error);
    res.status(500).json({ message: "Error: " + error.message });
  }
};