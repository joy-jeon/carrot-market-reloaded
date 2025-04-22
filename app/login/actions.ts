"use server";
export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // redirect("/");
  return {
    errors: ["wrong password", "비밀번호가 짧아요"],
  };
}
