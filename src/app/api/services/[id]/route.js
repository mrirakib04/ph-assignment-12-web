import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/service.model";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    // Service ID
    const { id } = await params;

    const service = await Service.findById(id);

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
