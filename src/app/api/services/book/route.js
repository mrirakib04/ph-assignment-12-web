import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/book.model";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    // if (!session) {
    //   return NextResponse.json(
    //     { message: "You must be logged in to book a service." },
    //     { status: 401 }
    //   );
    // }

    await connectDB();
    const body = await request.json();

    const bookingData = {
      ...body,
    };

    const newBooking = await Booking.create(bookingData);

    return NextResponse.json(
      { success: true, message: "Booking Confirmed!", data: newBooking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
