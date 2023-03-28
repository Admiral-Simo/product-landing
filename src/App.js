import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 bg-gray-200">
      <PayPalScriptProvider>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      value: "2",
                      breakdown: {
                        item_total: {
                          currency_code: "USD",
                          value: "20",
                        },
                      },
                    },
                    items: [
                      {
                        name: "donation-example",
                        quantity: "1",
                        unit_amount: {
                          currency_code: "USD",
                          value: "2",
                        },
                        category: "DONATION",
                      },
                    ],
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the donation
                return orderId;
              });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
