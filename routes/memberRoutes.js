
import express from "express";
import { protect, authorizeRole } from "../middleware/authmiddleware.js";
import Transaction from "../middleware/models/Transactions.js";
import Loan from "../middleware/models/Loan.js";
import Deposit from "../middleware/models/Deposit.js";

const router = express.Router();

// Protect all routes for members
router.use(protect);
router.use(authorizeRole("member"));

// Member dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const userId = req.user._id;

    const totalSavings = await Transaction.aggregate([
      { $match: { userId, type: "deposit" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalLoanAmount = await Loan.aggregate([
      { $match: { userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      totalSavings: totalSavings[0]?.total || 0,
      totalLoanAmount: totalLoanAmount[0]?.total || 0,
      balance: (totalSavings[0]?.total || 0) - (totalLoanAmount[0]?.total || 0),
      totalInterest: 0,
      creditScore: 75,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Deposit
router.post("/deposit", async (req, res) => {
  try {
    const { amount, type, method } = req.body;
    const deposit = await Transaction.create({
      userId: req.user._id,
      amount,
      type: type || "deposit",
      method: method || "mpesa",
    });
    res.json(deposit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Deposit failed" });
  }
});

// Request Loan
router.post("/loan", async (req, res) => {
  try {
    const { amount, duration } = req.body;

    if (!amount || !duration) {
      return res.status(400).json({ message: "Amount and duration are required" });
    }

    // Calculate interest (example: 5% per week)
    const interestRate = 0.05;
    const interest = amount * interestRate * Number(duration);

    const totalRepayable = amount + interest;

    const loan = await Loan.create({
      userId: req.user._id,
      amount,
      duration: Number(duration),
      interest,
      totalRepayable,
      status: "pending",
    });

    res.status(201).json({ message: "Loan requested successfully", loan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Loan request failed" });
  }
});

// Withdraw
router.post("/withdraw", async (req, res) => {
  try {
    const { amount } = req.body;

    const deposits = await Transaction.aggregate([
      { $match: { userId: req.user._id, type: "deposit" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const withdrawals = await Transaction.aggregate([
      { $match: { userId: req.user._id, type: "withdraw" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const balance = (deposits[0]?.total || 0) - (withdrawals[0]?.total || 0);

    if (amount > balance) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const withdraw = await Transaction.create({
      userId: req.user._id,
      amount,
      type: "withdraw",
    });

    res.json(withdraw);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Withdraw failed" });
  }
});

export default router;