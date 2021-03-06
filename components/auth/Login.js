import React, { useState } from "react";
import Link from "next/link";

import { signIn } from "next-auth/client";

import { toast } from "react-toastify";
import ButtonLoader from "../layout/ButtonLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    // setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(result);

    // setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = "/";
    }
  };
  return (
    <div class="container container-fluid">
      <div class="row wrapper">
        <div class="col-10 col-lg-5">
          <form class="shadow-lg" onSubmit={submitHandler}>
            <h1 class="mb-3">Login</h1>
            <div class="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link href="/password/forgot" class="float-right mb-4">
              Forgot Password?
            </Link>

            <button id="login_button" type="submit" class="btn btn-block py-3">
              LOGIN
            </button>

            <a href="/register" class="float-right mt-3">
              New User?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
