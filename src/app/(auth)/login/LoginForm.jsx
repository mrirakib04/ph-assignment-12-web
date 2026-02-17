"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button, Divider, TextField } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // MUI Custom Styles for Black-Blueish Theme
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": { borderColor: "#1e3a8a" }, // Dark Blue border
      "&:hover fieldset": { borderColor: "#3b82f6" }, // Bright Blue hover
      "&.Mui-focused fieldset": { borderColor: "#60a5fa" }, // Light Blue focus
    },
    "& .MuiInputLabel-root": { color: "#94a3b8" }, // Slate text
    "& .MuiInputLabel-root.Mui-focused": { color: "#60a5fa" },
  };

  const performLogin = async (email, password) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      toast.success("Welcome back to Care.io!", {
        position: "top-right",
        theme: "dark",
      });
      router.push("/");
    } else {
      toast.error(`Auth Error: ${res?.error || "Check your email/password"}`, {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await performLogin(email, password);
  };

  const handleQuickLogin = (role) => {
    const credentials = {
      admin: { email: "admin@care.com", pass: "123456" },
      user: { email: "user@care.com", pass: "123456" },
    };
    const { email, pass } = credentials[role];
    performLogin(email, pass);
  };

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center px-4 py-10">
      {/* Login Card */}
      <div className="w-full max-w-md bg-[#0f172a] border border-blue-900/50 p-8 rounded-3xl shadow-[0_0_50px_rgba(30,58,138,0.2)]">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center mb-8">
          <h3 className="text-4xl font-bold bg-linear-to-r py-1 from-white to-blue-400 bg-clip-text text-transparent">
            Login
          </h3>
          <p className="text-sm text-slate-400">
            Access your professional care dashboard
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <TextField
              name="email"
              type="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              sx={inputStyles}
            />

            <div className="relative">
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                fullWidth
                required
                sx={inputStyles}
              />
              <div
                className="absolute top-4 right-3 text-blue-400 text-2xl cursor-pointer z-10 hover:text-blue-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3! mt-2! bg-blue-600! hover:bg-blue-500! text-white! font-bold! rounded-xl! transition-all! shadow-lg! shadow-blue-900/20!"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="h-px bg-blue-900/50 flex-1"></div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              OR LOGIN WITH
            </span>
            <div className="h-px bg-blue-900/50 flex-1"></div>
          </div>

          {/* Google Login */}
          {/* <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center gap-3 w-full py-3 bg-white/5 hover:bg-white/10 border border-blue-900/30 rounded-xl transition-all group"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-sm font-semibold text-slate-200">
              Google Account
            </span>
          </button> */}

          {/* Quick Access */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button
              type="button"
              onClick={() => handleQuickLogin("admin")}
              className="py-2.5 rounded-lg text-xs font-bold border border-blue-500/20 bg-blue-500/5 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
            >
              Admin Demo
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin("user")}
              className="py-2.5 rounded-lg text-xs font-bold border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              User Demo
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-400 mt-4">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-400 hover:text-blue-300 font-bold underline underline-offset-4"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
