import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";

export async function PATCH(request, { params }) {
  try {
    const { email } = await params;
    const { name, image } = await request.json();

    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (name) user.name = name;
    if (image) user.image = image;

    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully!",
        user: {
          name: user.name,
          email: user.email,
          image: user.image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile Update Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
