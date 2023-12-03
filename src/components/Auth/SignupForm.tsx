"use client";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

function SignupForm() {
  const [signupData, setSignupData] = useState({
    name: "",
    name2: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event: { target: { name: string; value: string } }) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    console.log(signupData);
  };

  return (
    <div className="flexCenter flex-col text-center gap-12">
      <div id="signup-form-headings" className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          Get started with <span className="text-primary-500">BotGenie</span>
        </h1>
        <h3 className="text-md">Getting started is easy</h3>
      </div>
      <div id="signup-form" className="flexCenter flex-col gap-4">
        <Input
          placeholder="Full Name"
          name={"name"}
          value={signupData.name}
          type="name"
          onChange={onChange}
        />
        <Input
          placeholder="Full Name"
          name={"name2"}
          value={signupData.name2}
          type="name"
          onChange={onChange}
        />
        <Input
          placeholder="Email"
          name={"email"}
          value={signupData.email}
          type="email"
          onChange={onChange}
        />
        <Input
          placeholder="Password"
          name={"password"}
          value={signupData.password}
          type="password"
          onChange={onChange}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          name={"confirmPassword"}
          value={signupData.confirmPassword}
          onChange={onChange}
        />

        <Button
          title="Signup"
          type="primary"
          size="lg"
          onClick={onSubmit}
          className="mt-4"
        />
      </div>
    </div>
  );
}

export default SignupForm;
