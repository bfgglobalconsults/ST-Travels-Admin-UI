"use client"
import { useQueryClient, useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ImagePath } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Href } from '../../utils/Constant';
import SocialIcons from "@/Common/SocialIcons";
import axios, { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux-toolkit/reducers/authSlice";
import Spinner from "@/components/Spinner";

interface LoginResponse {
  status: string;
  message: string;
  access_token: string;
  refresh_token: string;
  data: any; // Customize the type based on your backend
}

const Login = () => {
  const dispatch = useDispatch();
   const router = useRouter();
    const queryClient = useQueryClient();
    const [loginInput, setLoginInput] = useState("");
    const [password, setPassword] = useState("");

    // Create the mutation for login
    const mutation = useMutation<
      AxiosResponse<LoginResponse>,
      any,
      { loginInput: string; password: string }
    >({
      mutationFn: (data) => {
        return axios.post(
          "https://st-travels-client-api.onrender.com/api/v1/employee-auth/signin",
          data
        );
      },
      onSuccess: (response) => {
        const { data, message, access_token, refresh_token } = response.data;
        Cookies.set("token", response.data.access_token);

        console.log("from responses", data);

        dispatch(login({ user: data, token: access_token }));
        // Store the access_token in localStorage
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);

        // Update query client with the response data
        queryClient.setQueryData(["user"], response.data);

        // Display success message using react-toastify
        toast.success(message || "Signed in successfully!");

        // Redirect to dashboard after a short delay
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      },
      onError: (error: any) => {
        toast.error(
          error.response?.data?.error || "Login failed. Please try again."
        );
      },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      mutation.mutate({ loginInput, password });
    };

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <div className="login-card">
            <div>
              <div>
                <Link className="logo" href="/">
                  <Image
                    height={34}
                    width={120}
                    className="img-fluid for-light"
                    src={`${ImagePath}/logo/ST-TRAVELS.png`}
                    alt="looginpage"
                  />
                  <Image
                    height={34}
                    width={120}
                    className="img-fluid for-dark"
                    src={`${ImagePath}/logo/ST-TRAVELS-WHITE.png`}
                    alt="looginpage"
                  />
                </Link>
              </div>
              <div className="login-main">
                <form className="theme-form" onSubmit={handleSubmit}>
                  <h4>Sign in to account</h4>
                  <p>Enter your email &amp; password to login</p>
                  <div className="form-group">
                    <label className="col-form-label form-label-title ">
                      Employee ID
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={loginInput}
                      onChange={(e) => setLoginInput(e.target.value)}
                      required
                      placeholder="Employee ID"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label form-label-title ">
                      Password
                    </label>
                    <div className="form-input position-relative">
                      <input
                        className="form-control"
                        type="password"
                        name="login[password]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="*********"
                      />
                      <div className="show-hide">
                        <span className="show"> </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="checkbox p-0">
                      <label className="d-block" htmlFor="checkbox-1">
                        <input
                          className="checkbox_animated"
                          id="checkbox-1"
                          type="checkbox"
                        />
                        Remember password
                      </label>
                    </div>
                    <a className="link" href={Href}>
                      Forgot password?
                    </a>
                    <div className="text-end mt-3">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="submit"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? <Spinner /> : "Sign in"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
