const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Environment variables for keys and secrets
const PAYCHANGU_SECRET_KEY =
  process.env.PAYCHANGU_SECRET_KEY ||
  "SEC-TEST-X4qzGxxsC0dVWPCYlJEafW6ILtvV3RCJ";
const PAYCHANGU_WEBHOOK_SECRET =
  process.env.PAYCHANGU_WEBHOOK_SECRET || "YOUR_WEBHOOK_SECRET";

// Endpoint to initiate Direct Charge payment
app.post("/api/direct-charge", async (req, res) => {
  const { phone_number, amount, currency } = req.body;

  if (!phone_number || !amount || !currency) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const tx_ref = "TX_" + Date.now();

  try {
    const response = await axios.get(
      "https://api.paychangu.com/v1/charges/direct",
      {
        params: {
          amount,
          currency,
          tx_ref,
          customer: {
            phone_number,
          },
          payment_method: "mobile_money",
        },
        headers: {
          Authorization: `Bearer ${PAYCHANGU_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("PayChangu direct charge response:", response.data);

    if (response.data && response.data.status === "success") {
      return res.json({
        message: "Payment initiated",
        data: response.data.data,
        tx_ref,
      });
    } else {
      console.error("Payment initiation failed response:", response.data);
      return res
        .status(500)
        .json({ message: "Payment initiation failed", details: response.data });
    }
  } catch (error) {
    console.error(
      "Direct charge error:",
      error.response ? error.response.data : error.message
    );
    return res
      .status(500)
      .json({ message: "Error initiating payment", error: error.message });
  }
});

// Webhook endpoint to receive payment notifications
app.post("/api/webhook", (req, res) => {
  const signature = req.headers["signature"] || req.headers["Signature"];
  const payload = JSON.stringify(req.body);

  if (!signature) {
    return res.status(400).send("Missing signature header");
  }

  // Verify signature
  const hash = crypto
    .createHmac("sha256", PAYCHANGU_WEBHOOK_SECRET)
    .update(payload)
    .digest("hex");

  if (hash !== signature) {
    return res.status(400).send("Invalid signature");
  }

  // Process webhook event
  const event = req.body;

  console.log("Received webhook event:", event);

  // TODO: Update order/payment status in your system based on event data
  // Example:
  // if (event.event === "payment.success") {
  //   // Mark order as paid in your database
  // }

  res.status(200).send("Webhook received");
});

// Endpoint to verify transaction status
app.get("/api/verify-payment/:tx_ref", async (req, res) => {
  const { tx_ref } = req.params;

  try {
    const response = await axios.get(
      `https://api.paychangu.com/verify-payment/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${PAYCHANGU_SECRET_KEY}`,
        },
      }
    );

    if (response.data.status === "success") {
      return res.json({
        message: "Transaction verified",
        data: response.data.data,
      });
    } else {
      return res
        .status(404)
        .json({ message: "Transaction not found or failed verification" });
    }
  } catch (error) {
    console.error(
      "Verification error:",
      error.response ? error.response.data : error.message
    );
    return res
      .status(500)
      .json({ message: "Error verifying transaction", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
