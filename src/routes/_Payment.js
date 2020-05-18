import React from "react";
import firebase from "firebase";

import { Paypal } from "../components";

const client = {
  sandbox: "xxxxxxxxxxxxxxxxxxxx", // id from sandbox paypal
  production: "xxxxxx", // id Paypal for production
};

const env = process.env.NODE_ENV === "production" ? "production" : "sandbox";

const total = 100;

const currency = "USD";

const onError = (error) => {
  console.log("error", error);
};

const onCancel = (data) => console.log("payment cancelled", data);

const onSuccess = payment => {
  console.log('payment succeed');
}

const Payment = props => {
    return (
      <Paypal
        env={env}
        client={client}
        total={total}
        currency={currency}
        onError={onError}
        onCancel={onCancel}
        onSuccess={onSuccess}
      />
    );
}//\const Payment

export { Payment };