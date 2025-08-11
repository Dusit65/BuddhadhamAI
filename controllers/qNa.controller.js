const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { execFile } = require("child_process");
const path = require("path");

// ถาม
exports.ask = async (req, res) => {
  try {
    const { chatId, question, k, d } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Question is required." });
    }

    const pythonPath = "python"; // หรือ python3
    const scriptPath = "./buddhamAI_cli.py";
    const args = [scriptPath, question];

    k != null && args.push("-k", k.toString());
    d != null && args.push("-d", d.toString());

    execFile(pythonPath, args, async (error, stdout, stderr) => {
      // if (error) {
      //   console.error("Python error:", error);
      //   return res.status(500).json({ message: "Python script error", error });
      // }
      // if (stderr) {
      //   console.error("Python stderr:", stderr);
      // }

      try {
        // console.log("stdout:", stdout);
        const JSONparsed = JSON.parse(stdout.trim());
        console.log("data:", JSONparsed.data);
        console.log("Python stdout:", JSONparsed.data.answer);

        const savedRecordQuestion = await prisma.qNa_tb.create({
          data: {
            chatId,
            qNaWords: question,
            qNaType: "Q",
          },
        });
        const savedRecordAnswer = await prisma.qNa_tb.create({
          data: {
            chatId,
            qNaWords: JSONparsed.data.answer,
            qNaType: "A",
          },
        });

        return res.status(201).json({
          message: "Question and Answer saved successfully",
          data: savedRecordQuestion + savedRecordAnswer,
          answer: JSONparsed.data.answer,
          references: JSONparsed.data.references,
          rejected: JSONparsed.data.rejected,
          duration: JSONparsed.data.duration,
        });
      } catch (jsonError) {
        console.error("JSON parse error:", jsonError);
        return res.status(500).json({ message: "Invalid JSON from Python script", error: jsonError });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      message: "Unexpected error: " + error.message,
      stack: error.stack,
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