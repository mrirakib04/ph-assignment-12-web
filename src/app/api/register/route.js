// src/app/api/register/route.js
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // 1. Connect to Database
    await connectMongoDB();

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    // 3. Create user (password hashing is handled in User model)
    await User.create({ name, email, password });

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
