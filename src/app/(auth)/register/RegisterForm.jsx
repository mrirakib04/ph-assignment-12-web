"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { Button, Divider, TextField } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Link from "next/link";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Prevent Hydration Error
  useEffect(() => {
    setMounted(true);
  }, []);

  // MUI Custom Styles for Black-Blueish Theme
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": { borderColor: "#1e3a8a" }, // Dark Blue
      "&:hover fieldset": { borderColor: "#3b82f6" }, // Bright Blue
      "&.Mui-focused fieldset": { borderColor: "#60a5fa" }, // Light Blue
    },
    "& .MuiInputLabel-root": { color: "#94a3b8" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#60a5fa" },
    "& .MuiFormLabel-root.Mui-required .MuiFormLabel-asterisk": {
      color: "#60a5fa",
    },
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, imageURL } = e.target;

    if (!validatePassword(password.value)) {
      toast.info(
        "Password must be 6+ chars with Uppercase, Lowercase, Number & Special char.",
        {
          theme: "dark",
        }
      );
      return;
    }

    try {
      // Direct call to your internal API
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          image: imageURL.value,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success("Account created! Logging in...", { theme: "dark" });

      // Automatically sign in after registration
      await signIn("credentials", {
        email: email.value,
        password: password.value,
        callbackUrl: "/",
      });
    } catch (err) {
      toast.error(err.message, { theme: "dark" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-[#0f172a] border border-blue-900/40 p-6 sm:p-10 rounded-3xl shadow-[0_0_50px_rgba(30,58,138,0.15)]">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center mb-8 text-center">
          <h3 className="text-4xl font-bold bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Create Account
          </h3>
          <p className="text-sm text-slate-400">
            Join Care.xyz to manage your professional services
          </p>
        </div>

        <Divider className="bg-blue-900/30" />

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              required
              fullWidth
              sx={inputStyles}
            />
            <TextField
              name="email"
              label="Email Address"
              variant="outlined"
              type="email"
              required
              fullWidth
              sx={inputStyles}
            />
          </div>

          <TextField
            name="imageURL"
            label="Profile Image URL"
            variant="outlined"
            fullWidth
            placeholder="https://example.com/photo.jpg"
            sx={inputStyles}
          />

          <div className="relative">
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              required
              fullWidth
              sx={inputStyles}
            />
            <div
              className="absolute top-4 right-3 text-blue-400 text-2xl cursor-pointer z-10 hover:text-blue-300 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full md:w-1/2 mx-auto! mt-4 bg-blue-600! hover:bg-blue-500! text-white! font-bold! py-3.5! rounded-xl! transition-all shadow-lg shadow-blue-900/20"
          >
            Register Now
          </Button>
        </form>

        <div className="mt-8 text-center text-slate-400 flex items-center justify-center gap-2">
          <span>Already have an account?</span>
          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-900 underline-offset-4 transition-all"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
