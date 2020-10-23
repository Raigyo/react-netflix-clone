import React from "react";
import firebase from "firebase";

import { Paypal } from "../components";

const client = {
  sandbox:
    "AaEHC5KH-TP4v-dqP7H579bwTkxRkDGiLEsYr_3AaJjlHc4zBBmnSNEtsL-40BnUVskjQxhJc0ro00VM",
    // id from sandbox paypal
  production: "xxxxxx", // id Paypal for production
};

// Account USER
// Email ID:
// sb-b16hu1812867@personal.example.com
// System Generated Password:
// 6GX-f<^1

// Account BUSINESS
// Email ID:
// sb-3nbqk1708322@business.example.com
// System Generated Password:
// 8vTw1Ym!

const env = process.env.NODE_ENV === "production" ? "production" : "sandbox";

const total = 100;

const currency = "USD";

const onError = (error) => {
  console.log("error", error);
};

const onCancel = (data) => console.log("payment cancelled", data);


const Payment = (props) => {
  const onSuccess = (payment) => {
    console.log("payment succeed");
    const user = firebase.auth().currentUser;
    const dbRef = firebase.database().ref(`users/${user.uid}`);
    const now = new Date();
    const newDate = now.setDate(now.getDate() + 30);
    console.log("newDate", newDate);
    dbRef
      .set({ validUntil: newDate })
      .then(() => {
        console.log("operation succeed");
        props.history.push({ pathname: "/" });
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
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
};//\const Payment

export { Payment };