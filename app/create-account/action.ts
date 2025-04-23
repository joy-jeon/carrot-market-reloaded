"use server";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자로 입력하세요",
        required_error:
          "필수 항목 입니다 ('username'을 찾을 수 없을때 나옴 이름 오타 확인)",
      })
      .min(5, "5자 이상 작성")
      .max(10, "10자 이하로 작성")
      .refine(checkUsername, "potato를 포함하면 오류"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .refine(checkPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
