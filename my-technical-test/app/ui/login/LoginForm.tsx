"use client"
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className='bg-[var(--bgSoft)] p-[50px] rounded-large w-[500px] h-[500px] flex flex-col items-center justify-center gap-[30px]'>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" className="w-full p-[30px] border-2 border-customColor rounded-[5px] bg-[var(--bg)] text-[var(--text)]" />
      <input type="password" placeholder="password" name="password" className="w-full p-[30px] border-2 border-customColor rounded-[5px] bg-[var(--bg)] text-[var(--text)]" />
      <button className="w-full p-[30px] bg-teal-300 text-[var(--text)] border-0 cursor-pointer rounded-[5px]">Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;