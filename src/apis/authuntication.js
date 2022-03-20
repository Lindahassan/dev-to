import React from "react";
import axios from "axios";

export const registerWithEmailAndPassword = (props) => {
  axios
    .post("https://medium0clone.herokuapp.com/api/user/signup", {
      firstName: props.username,
      email: props.email,
      password: props.password,
    })
    .then((res) => {
      console.log(res.data);
      return {
        data: res.data,
        status: "success",
      };
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
      return {
        error: err.responce.data.data[0].message,
        status: "error",
      };
    });
};
