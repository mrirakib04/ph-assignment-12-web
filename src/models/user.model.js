import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // নিশ্চিত হোন যে আপনি bcryptjs ইনস্টল করেছেন

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["User", "Admin", "Caregiver"], // Role
      default: "User",
    },
    image: {
      type: String,
      default: "", // Profile Picture
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

// Password hashing middleware - next আর্গুমেন্ট বাদ দেওয়া হয়েছে
userSchema.pre("save", async function () {
  // যদি পাসওয়ার্ড পরিবর্তিত না হয়, তাহলে পাসওয়ার্ড হ্যাশ করার দরকার নেই
  if (!this.isModified("password")) {
    return;
  }

  try {
    // পাসওয়ার্ড হ্যাশ করা
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    // এরর হলে throw করুন, Mongoose এটি হ্যান্ডেল করবে
    throw new Error(error);
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
