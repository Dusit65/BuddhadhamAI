const express = require('express');
const qNaCtrl = require('../controllers/qNa.controller.js');
const router = express.Router();

// Route definitions
router.post("/ask", qNaCtrl.ask);
router.post("/webhook", qNaCtrl.notifyWebhook);
router.post("/cancel", qNaCtrl.cancel);
router.delete("/:qNaId", qNaCtrl.deleteqNa);

module.exports = router;