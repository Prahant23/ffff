import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../apis/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);

          // Save token in local storage
          localStorage.setItem("token", res.data.token);

          // Save user details in local storage
          localStorage.setItem("user", JSON.stringify(res.data.user)); // Make sure to stringify the object

          // Redirect or update UI as needed
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal server error");
      });
  };


  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-9 col-lg-6 col-xl-5">
            {}
            <img
              src="/assets/images/fashion.png"
              className="img-fluid"
              alt="Sample image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  onChange={handleEmail}
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  onChange={handlePassword}
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="forgotpassword" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="Register" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
