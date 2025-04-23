"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";
import type { FormState } from "./actions";
import {
  FireIcon,
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [state, dispatch] = useFormState<FormState, FormData>(handleForm, {
    fieldErrors: {},
  });

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto w-full flex flex-col items-center gap-6 *:font-medium">
        <FireIcon className="size-14 text-[#ff7a7f]" />

        <form action={dispatch} className="flex flex-col gap-3 w-2/3">
          <div className="relative">
            <FormInput
              name="email"
              type="email"
              placeholder="email"
              required
              errors={"fieldErrors" in state ? state.fieldErrors.email : []}
            />

            <EnvelopeIcon className="input-icon" />
          </div>
          <div className="relative">
            <FormInput
              name="username"
              type="text"
              placeholder="username"
              required
              errors={"fieldErrors" in state ? state.fieldErrors.username : []}
            />
            <UserIcon className="input-icon" />
          </div>
          <div className="relative">
            <FormInput
              name="password"
              type="password"
              placeholder="password"
              required
              errors={"fieldErrors" in state ? state.fieldErrors.password : []}
            />
            <KeyIcon className="input-icon" />
          </div>
          <FormButton text="Log in" />
        </form>
        {state?.message && (
          <p className="text-green-500 text-sm">{state.message}</p>
        )}
      </div>
    </div>
  );
}
