"use client";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const onChange = (event: { target: { name: string; value: string } }) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      alert(data.message);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flexCenter flex-col text-center gap-12">
      <div id="login-form-headings" className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <h3 className="text-md">Login into your account</h3>
      </div>
      <div id="login-form" className="flexCenter flex-col gap-4">
        <Input
          placeholder="Email"
          type="username"
          name="username"
          value={loginData.username}
          onChange={onChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={onChange}
        />
        <Button
          title="Login"
          type="primary"
          size="lg"
          onClick={handleSubmit}
          className="mt-4"
        />
      </div>
    </div>
  );
}

export default LoginForm;
