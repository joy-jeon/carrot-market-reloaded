"use server";
export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const password = formData.get("password");

  if (password !== "12345") {
    return {
      errors: ["wrong password"],
    };
  }
  return {
    message: "로그인에 성공했습니다!",
  };
}
