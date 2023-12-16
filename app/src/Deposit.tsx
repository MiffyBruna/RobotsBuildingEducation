import React from "react";
import { LightningAddress } from "@getalby/lightning-tools";
import { Button, Modal, launchModal } from "@getalby/bitcoin-connect-react";
import toast, { Toaster } from "react-hot-toast";

export const Deposit = (depositAmount) => {
  const [invoice, setInvoice] = React.useState<string | undefined>(undefined);
  const [preimage, setPreimage] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        const ln = new LightningAddress("levitatingnight182471@getalby.com");
        await ln.fetch();
        setInvoice(
          (
            await ln.requestInvoice({
              satoshi: depositAmount || 1,
              comment: "To Robots Building Education",
            })
          ).paymentRequest
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  let payInvoice = async () => {
    try {
      if (!window.webln || !window.webln) {
        throw new Error("Please connect your wallet");
      }
      if (!invoice) {
        throw new Error("No invoice available");
      }
      const result = await window.webln.sendPayment(invoice);

      if (!result?.preimage) {
        throw new Error("Payment failed. Please try again");
      }

      return result;
    } catch (error) {
      alert(
        "Unable to complete Bitcoin transaction. Make sure you're connected and have deposits available."
      );
    }
  };

  return payInvoice;
};
