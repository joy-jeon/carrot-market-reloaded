"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Create Account</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
        />
        <FormInput name="email" type="email" placeholder="email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          required
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="confirm password"
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
