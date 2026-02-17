import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/book.model";

export async function GET(request, { params }) {
  try {
    const { email } = params;
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page")) || 1;

    const limit = 9;
    const skip = (page - 1) * limit;

    const query = {
      bookedBy: email,
      $or: [
        { serviceName: { $regex: search, $options: "i" } },
        { status: { $regex: search, $options: "i" } },
      ],
    };

    const bookings = await Booking.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalBookings = await Booking.countDocuments(query);
    const totalPages = Math.ceil(totalBookings / limit);

    return NextResponse.json(
      {
        success: true,
        data: bookings,
        pagination: {
          totalBookings,
          totalPages,
          currentPage: page,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("My Bookings API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}
