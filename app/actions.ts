"use server";

import { z } from "zod";

const refineEmail = (email: string) => email.endsWith("@zod.com");
const refinePassword = (pw: string) => /\d/.test(pw);

const formSchema = z.object({
  email: z.string().email().refine(refineEmail, {
    message: "@zod.com 이메일만 허용",
  }),
  username: z.string().min(5, "5자 이상 작성").max(20, "20자 이하로 작성"),
  password: z
    .string()
    .min(10, "10자 이상 작성")
    .refine(refinePassword, "숫자 최소 1개 이상 포함 필수"),
});
type FormFields = z.infer<typeof formSchema>;

export type FormState =
  | {
      fieldErrors: z.typeToFlattenedError<FormFields>["fieldErrors"];
      message?: string;
    }
  | {
      message: string;
    };

export async function handleForm(
  prevState: any,
  formData: FormData
): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  return {
    message: "로그인에 성공했습니다!",
  };
}
