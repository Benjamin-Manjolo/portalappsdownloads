import { useEffect, useState } from "react";

export default function Success() {
  const [transaction, setTransaction] = useState(null);
  const [message, setMessage] = useState("Loading transaction details...");

  useEffect(() => {
    // Extract tx_ref from URL query params
    const params = new URLSearchParams(window.location.search);
    const tx_ref = params.get("tx_ref");

    if (!tx_ref) {
      setMessage("Transaction reference not found in URL.");
      return;
    }

    const fetchTransaction = async () => {
      try {
        const response = await fetch(`/api/verify-payment/${tx_ref}`);
        const data = await response.json();
        if (response.ok) {
          setTransaction(data.data);
          setMessage("Transaction verified successfully.");
        } else {
          setMessage(
            "Verification failed: " + (data.message || "Unknown error")
          );
        }
      } catch (error) {
        setMessage("Error verifying transaction: " + error.message);
      }
    };

    fetchTransaction();
  }, []);

  return (
    <>
      <div>Payment Success</div>
      <div>{message}</div>
      {transaction && (
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(transaction, null, 2)}
        </pre>
      )}
    </>
  );
}
