import React, { useState } from "react";
import usersService from "../../services/usersService";
import toastr from "toastr";
import debug from "sabio-debug";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const basicValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, a special character, and one number"
    ),
});

function LogIn() {
  const [userLogInData] = useState({
    email: "",
    password: "",
    tenantId: "U06C4AUE5AT",
  });

  const _logger = debug.extend("LogIn");
  _logger("LOGGER");

  const handleLogInSubmit = (values) => {
    _logger(values, "LogIn Button Clicked");

    usersService.login(values).then(onLogInSuccess).catch(onLogInError);
  };

  const onLogInSuccess = (response) => {
    console.log(response, "onLogInSuccess");
    toastr.success("Login Successfully!");
  };

  const onLogInError = (error) => {
    console.error(error, "onLogInError");
    toastr.error("Login Failed. Please try again.");
  };

  return (
    <React.Fragment>
      <h1>Login</h1>

      <div className="container mt-5 fs-2">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Formik
              enableReinitialize={true}
              initialValues={userLogInData}
              onSubmit={handleLogInSubmit}
              validationSchema={basicValidationSchema}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" style={{ fontSize: 20 }}>
                    Email address
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="has-error"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ fontSize: 20 }}
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="has-error"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default LogIn;
