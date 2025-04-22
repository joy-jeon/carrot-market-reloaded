import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS LOGIN</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="phone number"
          required
          errors={["error here"]}
        />
        <FormInput
          type="number"
          placeholder="verification code"
          required
          errors={["error here"]}
        />
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
}
