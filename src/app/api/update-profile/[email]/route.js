import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";

export async function PATCH(request, { params }) {
  try {
    const { email } = await params;
    const { name, image } = await request.json();

    await connectMongoDB();

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { name, image },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully!",
        user: {
          name: updatedUser.name,
          email: updatedUser.email,
          image: updatedUser.image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile Update Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
