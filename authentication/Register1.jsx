import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/logo.png";
import Modal from "react-bootstrap/Modal";

const Register = (props) => {
  const sendInfo = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstname: "Abiodun",
      lastname: "Oyekunle",
      email: "yhung.habey1999@gmail.com",
      password: "yhunghabey",
      phoneNumber: "08033451319",
    });
    fetch("https://apis-paymax.herokuapp.com/usermgt/user/signup", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const mod = document.querySelector("#register-modal");
    // mod?.modal({ show: true });
    console.log(mod);
  }, []);

  return (
    <div className="main-wrapper login-body">
      <Modal
        show={true}
        contentClassName="modalContent"
        dialogClassName="modalDialog"
      >
        <div className="login-wrapper">
          <div className="container">
            {/* <span className="img-fluid logo-dark mb-2">
                        <Image src={Logo} alt="Logo" />
                    </span> */}
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Adventure starts here</h1>
                  <p className="account-subtitle">
                    Making app management easy and fun!
                  </p>

                  {/* Form */}
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter User Name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">
                        Email Address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">
                        Confirm Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor=""
                        className="mr-4"
                        style={{ marginRight: "1rem" }}
                      >
                        <input
                          type="radio"
                          name="user-type"
                          id=""
                          className="mr-2"
                        />
                        Customer
                      </label>
                      <label htmlFor="" className="mr-3">
                        <input
                          type="radio"
                          name="user-type"
                          id=""
                          className="mr-2"
                        />
                        Service Provider/Merchant
                      </label>
                    </div>
                    <div className="form-group d-flex align-items-center  justify-content-between">
                      <div className="w-100 mr-2">
                        Major Category
                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle w-100 bg-transparent text-secondary"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Consulting
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-100 ml-2">
                        Sub Category
                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle w-100 bg-transparent text-secondary"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Health
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-lg btn-block btn-primary w-100"
                        onClick={sendInfo}
                        type="button"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  {/* /Form */}

                  {/* <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div> */}
                  {/* Social Login */}
                  {/* <div className="social-login">
                                    <span>Register with</span>
                                    <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="google">
                                        <i className="fab fa-google"></i>
                                    </a>
                                </div> */}
                  {/* /Social Login */}
                  <div className="text-center dont-have" onClick={sendInfo}>
                    Already have an account?{" "}
                    <Link href="/login">Sign in instead</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Register;
