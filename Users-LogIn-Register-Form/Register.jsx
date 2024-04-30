import React, { useState } from "react";
import usersService from "../../services/usersService";
import toastr from "toastr";

function Register() {
  const [userRegisterData, setuserRegisterData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "U06C4AUE5AT",
  });

  const onFormFieldChange = (event) => {
    console.log("onChange", { syntheticEvent: event });
    const target = event.target;

    const newUserValue = target.value;
    const nameOfField = target.name;

    setuserRegisterData((prevState) => {
      const newUserObject = { ...prevState };
      newUserObject[nameOfField] = newUserValue;
      console.log("newUserValue", newUserValue);

      return newUserObject;
    });

    console.log("end onChange");
  };

  const onRegisterClicked = (e) => {
    e.preventDefault();
    console.log(e, "Register Button Clicked");

    usersService
      .register(userRegisterData)
      .then(onRegisterSuccess)
      .catch(onRegisterInError);
  };

  const onRegisterSuccess = (response) => {
    console.log(response, "onRegisterSuccess");
    toastr.success("Registration Successfully!");
  };

  const onRegisterInError = (error) => {
    console.error(error, "onRegisterInError");
    toastr.error("Registration Failed. Please try again.");
  };

  return (
    <React.Fragment>
      <h1>Register</h1>

      <div className="container mt-5 fs-2">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail" style={{ fontSize: 20 }}>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email Address"
                  value={userRegisterData.email}
                  onChange={onFormFieldChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputFirstName" style={{ fontSize: 20 }}>
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  name="firstName"
                  placeholder="Enter your First Name"
                  value={userRegisterData.firstName}
                  onChange={onFormFieldChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputFirstName" style={{ fontSize: 20 }}>
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  value={userRegisterData.lastName}
                  onChange={onFormFieldChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputPassword" style={{ fontSize: 20 }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  placeholder="Enter Your Password"
                  value={userRegisterData.password}
                  onChange={onFormFieldChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputPasswordConfirm" style={{ fontSize: 20 }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordConfirm"
                  name="passwordConfirm"
                  placeholder="Re-Enter Your Password"
                  value={userRegisterData.passwordConfirm}
                  onChange={onFormFieldChange}
                />
              </div>

              <div className="form-group mt-2">
                <label
                  className="mb-1"
                  htmlFor="avatarUrl"
                  style={{ fontSize: 20 }}
                >
                  Profile Url
                </label>
                <input
                  type="avatarUrl"
                  name="avatarUrl"
                  className="form-control"
                  id="avatarUrl"
                  placeholder="Provide Url to an Image"
                  value={userRegisterData.avatarUrl}
                  onChange={onFormFieldChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={onRegisterClicked}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
