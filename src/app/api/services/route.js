import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb"; // DB Connection
import Service from "@/models/service.model";

export async function GET(request) {
  try {
    await connectDB();

    // URL to params
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const minPrice = parseInt(searchParams.get("minPrice")) || 0;
    const maxPrice = parseInt(searchParams.get("maxPrice")) || 100000;
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12; // 12/1

    // filter object
    let query = {};

    // ১. search
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { shortDescription: { $regex: search, $options: "i" } },
      ];
    }

    // ২. cat filter
    if (category && category !== "All") {
      query.category = category;
    }

    // ৩. price filter
    query.pricePerHour = { $gte: minPrice, $lte: maxPrice };

    // ৪. page calculation
    const skip = (page - 1) * limit;

    // db to api
    const services = await Service.find(query).skip(skip).limit(limit);

    // Total pages
    const totalServices = await Service.countDocuments(query);
    const totalPages = Math.ceil(totalServices / limit);

    return NextResponse.json({
      success: true,
      data: services,
      meta: {
        totalServices,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
