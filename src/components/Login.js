import React from "react";
import "./Login.css";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const Navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    
    onSubmit:(data) => {
      const fetched_data = JSON.parse(localStorage.getItem("users"));

      const invalid_username = fetched_data.find(
        (usersdata) =>
          usersdata.username !== data.username &&
          usersdata.password === data.password
      );
      const invalid_password = fetched_data.find(
        (usersdata) =>
          usersdata.username === data.username &&
          usersdata.password !== data.password
      );
      const varified_data = fetched_data.find(
        (usersdata) =>
          usersdata.username === data.username &&
          usersdata.password === data.password
      );
      const invalid_data = fetched_data.find(
        (object) =>
          object.username !== fetched_data.username &&
          object.password !== fetched_data.password
      );

      varified_data
      ? Swal.fire({
        timer:4000,
          title: "Login Successful",
          width: 600,
          padding: "3em",
          confirmButtonColor: "green",
          color: "green",
          background: "rgba(0,0,0,0.8)",
          backdrop: `
        rgba(0,0,0,0.5)
        url("https://acegif.com/wp-content/uploads/gif/confetti-27.gif")
        `,
        }) && Navigate("/page1"):
        invalid_username
        ? Swal.fire({
            timer: 4000,
            title: "Invalid Username",
            width: 400,
            icon: "info",
            padding: "3em",
            confirmButtonColor: "#c4981f",
            color: "#a17e20",
            background: "rgba(0,0,0,0.7)",
            backdrop: `
          rgba(171, 55, 55,0.2)
          url("https://media0.giphy.com/media/MXywxyJ5UyvtgoF94a/200w.gif?cid=82a1493bi12z3ndekoh3s2uvtnn8s0ln1owj0orntrsn6isq&rid=200w.gif&ct=g")
          top center
          no-repeat
        `,
          })
        : invalid_password
        ? Swal.fire({
            timer: 4000,
            title: "Invalid Password",
            width: 400,
            icon: "warning",
            padding: "3em",
            confirmButtonColor: "#d60000",
            color: "#a82f2f",
            background: "rgba(0,0,0,0.8)",
            backdrop: `
          rgba(171, 55, 55,0.2)
          url("https://media4.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif")
          top center
          no-repeat
        `,
          })
        : invalid_data
        ? Swal.fire({
            timer: 4000,
            title: "Invalid Username and Password",
            icon: "error",
            width: 400,
            padding: "3em",
            confirmButtonColor: "red",
            color: "#d60d10",
            background: "rgba(0,0,0,0.5)",
            backdrop: `
          rgba(0,0,0,0.5)
          url("https://64.media.tumblr.com/c2a26a1ab0af9ba1703dcaa4c89c166c/tumblr_oo1te4wOHq1vdfksno1_500.gif")
          top center
          no-repeat
          `,
          })
        : console.log("invalid")
    },
  });

  return (
    <>
      <div className="divlog">
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="maindiv"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: [null, 1.02, 1.01] }}
              transition={{ duration: 0.5 }}
              className="box"
            >
              <h1>Login</h1>
              <div className="input inp1">
                <input
                  className="inp user"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Username"
                ></input>
              </div>
              <div className="input inp2">
                <input
                  className="inp pass"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                ></input>
              </div>
              <div className="buttons">
                <button className="btn1" type="submit">
                  Login
                </button>
                <button className="btn2">Register</button>
              </div>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </>
  );
}
