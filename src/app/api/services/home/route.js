import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Service from "@/models/service.model";

export async function GET() {
  try {
    await connectDB();

    const services = await Service.find({}).sort({ createdAt: -1 }).limit(6);

    return NextResponse.json(
      {
        success: true,
        message: "Latest 8 services fetched successfully",
        data: services,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Home Services API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch home services",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
