"use client";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { ERROR_REASONS, emailRegex } from "@/utils";

function SignupForm(props:any) {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    fromReferral:"",
    confirmPassword: "",
  });

  const [signupError, setSignupError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (event: { target: { name: string; value: string } }) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  const createAccount = async () => {
    try {
      const response = await fetch('/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }


  const onSubmit = async () => {
    setLoading(true);
    props.setEmail(signupData.email);
    setSignupError("");
    
    let emptyValues = Object.values(signupData).some((value) => value=="");
    let emailValid = signupData.email.toLowerCase().match(emailRegex);
    
    if(emptyValues){
      setSignupError("* Please fill in all the fields.");
      setLoading(false);
      return;
    }

    if(!emailValid){
      setSignupError("* Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try{
      const response:any = await createAccount();
      console.log(response);
      if(response?.error && response?.reason && response?.reason === ERROR_REASONS.emailExists){
        setSignupError("* Email already exists. Please try a different email address");
        setLoading(false);
        return;
      } else if(response?.error){
        setSignupError("* Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if(response?.success){
        props.handleAccountCreated();
        setLoading(false);
      }
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
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
          placeholder="Email"
          name={"email"}
          value={signupData.email}
          type="email"
          onChange={onChange}
        />
        <Input
          placeholder="Referral Code"
          name={"fromReferral"}
          value={signupData.fromReferral}
          type="referral"
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
        <p className="mt-2 text-red-600 self-start">{signupError}</p>
        <Button
          title="Signup"
          type="primary"
          size="lg"
          disabled={loading}
          // onClick={onSubmit}
          onClick={() => alert("Signup is disabled")}
          className="mt-4"
        />
      </div>
    </div>
  );
}

export default SignupForm;
