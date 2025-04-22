"use client";
import { FireIcon } from "@heroicons/react/24/solid";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import { handleForm } from "./login/actions";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { KeyIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [state, action] = useFormState(handleForm, {
    errors: {},
    message: "",
  } as any);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto w-full flex flex-col items-center gap-6 *:font-medium">
        <FireIcon className="size-14 text-[#ff7a7f]" />

        <form action={action} className="flex flex-col gap-3 w-2/3">
          <div className="relative">
            <FormInput
              name="email"
              type="email"
              placeholder="email"
              required
              errors={state?.errors?.email ?? []}
            />
            <EnvelopeIcon className="input-icon" />
          </div>
          <div className="relative">
            <FormInput
              name="text"
              type="text"
              placeholder="username"
              required
              errors={state?.errors?.username ?? []}
            />
            <UserIcon className="input-icon" />
          </div>
          <div className="relative">
            <FormInput
              name="password"
              type="password"
              placeholder="password"
              required
              errors={state?.errors ?? []}
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
