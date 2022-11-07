import React from "react";
import "./Register.css";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "too short")
    .max(20, "too long")
    .required("required"),
  username: Yup.string()
    .min(2, "too short")
    .max(25, "too long")
    .required("required"),
  email: Yup.string().email("Invalid Email").required("required"),
  password: Yup.string()
    .min(4, "too short")
    .max(20, "too long")
    .required("required"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Register() {

  const navigate = useNavigate()

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
    

      let usersRecord = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];

      const unique = usersRecord.some((everydata)=>everydata.username === values.username)

      usersRecord.push({
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
      });

      
      if(unique){
        Swal.fire({
          title:"Username already exist",
          background:"rgba(0,0,0,0.5)",
          color:"red",
          confirmButtonColor:"red",
          icon:"warning"
        })
      }else if(!unique){
        localStorage.setItem("users",JSON.stringify(usersRecord))
        Swal.fire({
          title:"Registered Successful",
          background:"rgba(0,0,0,0.5)",
          color:"green",
          confirmButtonColor:"green",
        
          backdrop:`
          url("https://www.osboha180.com/rack/assets/img/celebration.gif")
          rgba(0,0,0,0.3)
          `
        })
        navigate("/login")
      }

    }
  })

  return (
    <>
      <div className="divreg">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="regmaindiv"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: [null, 1.02, 1.01] }}
              transition={{ duration: 0.5 }}
              className="regbox"
            >
              <h1>Register</h1>
              <div className="reginput reginp1">
                <input
                  className="inp name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.name && touched.name ? (
                  <p className="form_error">{errors.name}</p>
                ) : null}
              </div>
              <div className="reginput reginp2">
                <input
                  className="inp user"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.username && touched.username ? (
                  <p className="form_error">{errors.username}</p>
                ) : null}
              </div>
              <div className="reginput reginp3">
                <input
                  className="inp email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.email && touched.email ? (
                  <p className="form_error">{errors.email}</p>
                ) : null}
              </div>
              <div className="reginput reginp4">
                <input
                  className="inp pass"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.password && touched.password ? (
                  <p className="form_error">{errors.password}</p>
                ) : null}
              </div>
              <div className="reginput reginp4">
                <input
                  className="inp confpass"
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form_error">{errors.confirm_password}</p>
                ) : null}
              </div>
              <div className="regbuttons">
                <button className="regbtn1" type="submit">
                  Register
                </button>
                <button className="regbtn2" type="reset">
                  Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </>
  );
}
