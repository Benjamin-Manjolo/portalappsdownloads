import { useState, useEffect } from "react";

function PayButton({ phoneNumber }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [useInline, setUseInline] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load Paychangu popup.js script for Inline Checkout
    if (useInline && !scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://checkout.paychangu.com/popup.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
        setScriptLoaded(false);
      };
    }
  }, [useInline, scriptLoaded]);

  const verifyTransaction = async (tx_ref) => {
    try {
      const response = await fetch(`/api/verify-payment/${tx_ref}`);
      const data = await response.json();
      if (response.ok) {
        setMessage("Transaction verified: " + JSON.stringify(data.data));
      } else {
        setMessage("Verification failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      setMessage("Error verifying transaction: " + error.message);
    }
  };

  const handleDirectCharge = async () => {
    if (!phoneNumber) {
      alert("Please enter a valid phone number.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/direct-charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          amount: 1000,
          currency: "MWK",
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(
          "Payment initiated successfully. Please authorize on your phone."
        );
        // Optionally verify transaction after some delay or webhook confirmation
        // Here we verify immediately for demo
        await verifyTransaction(data.tx_ref);
      } else {
        setMessage(
          "Payment initiation failed: " + (data.message || "Unknown error")
        );
      }
    } catch (error) {
      setMessage("Error initiating payment: " + error.message);
    }
    setLoading(false);
  };

  const handleInlineCheckout = () => {
    if (!window.PaychanguCheckout) {
      setMessage("PaychanguCheckout script not loaded yet.");
      return;
    }
    setLoading(true);
    setMessage("");
    const tx_ref = "TX_" + Date.now();
    window.PaychanguCheckout({
      amount: 1000,
      currency: "MWK",
      tx_ref,
      onClose: () => {
        setLoading(false);
        setMessage("Payment popup closed.");
      },
      onSuccess: async () => {
        setMessage("Payment successful. Verifying transaction...");
        await verifyTransaction(tx_ref);
        setLoading(false);
      },
      onError: (error) => {
        setMessage("Payment error: " + error.message);
        setLoading(false);
      },
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={useInline}
          onChange={() => setUseInline(!useInline)}
          disabled={loading}
        />
        Use Inline Checkout
      </label>
      {!useInline && (
        <>
          {/* Removed phone number input here */}
          <button onClick={handleDirectCharge} disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </>
      )}
      {useInline && (
        <button
          onClick={handleInlineCheckout}
          disabled={loading || !scriptLoaded}
          title={!scriptLoaded ? "Loading payment script..." : ""}
        >
          {loading ? "Processing..." : "Pay with Inline Checkout"}
        </button>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default PayButton;
