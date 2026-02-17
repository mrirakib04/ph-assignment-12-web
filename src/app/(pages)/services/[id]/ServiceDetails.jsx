"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaStar,
  FaCheckCircle,
  FaUserMd,
  FaCalendarCheck,
} from "react-icons/fa";
import { Box, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ServiceDetails = ({ id }) => {
  const { data: session } = useSession(); // লগইন স্ট্যাটাস চেক
  const router = useRouter();

  // হ্যান্ডেল বুকিং ক্লিক
  const handleBookingClick = (e) => {
    if (!session) {
      e.preventDefault(); // লিঙ্কে যাওয়া বন্ধ করবে
      toast.error("Please login first to book a service!");
      router.push("/login");
    }
  };

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/services/${id}`);
        setService(response.data.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching service details:", err);
        setError("Failed to load service details.");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          color: "#3b82f6",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (!service) {
    return (
      <div className="text-center py-20 text-white">Service not found.</div>
    );
  }

  return (
    <div className="bg-[#030712] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest bg-blue-900/30 px-3 py-1 rounded-full">
            {service.category}
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-2">
            {service.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <FaStar className="text-yellow-500" /> {service.rating} (
              {service.totalReviews} Reviews)
            </div>
            <span>|</span>
            <div className="flex items-center gap-1.5">
              <FaUserMd className="text-blue-400" />{" "}
              {service.experienceRequired}
            </div>
          </div>
        </div>

        {/* Image and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side: Images & Description */}
          <div className="lg:col-span-2">
            <img
              src={service.mainImage}
              alt={service.title}
              className="w-full h-96 object-cover rounded-2xl border border-blue-900/30 mb-6"
            />

            {/* Gallery Images (Optional) */}
            {service.galleryImages && service.galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mb-8">
                {service.galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery ${i}`}
                    className="h-24 w-full object-cover rounded-lg border border-blue-900/20"
                  />
                ))}
              </div>
            )}

            <div className="bg-[#0f172a] p-8 rounded-2xl border border-blue-900/30">
              <h2 className="text-2xl font-bold text-white mb-4">
                About this service
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </div>

          {/* Right Side: Features, Req & Price */}
          <div className="lg:col-span-1 space-y-8">
            {/* Price Card */}
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-[#030712] rounded-lg">
                  <span className="text-slate-400">Price per Hour</span>
                  <span className="text-xl font-bold text-blue-400">
                    ৳{service.pricePerHour}
                  </span>
                </div>
                <div className="flex justify-between p-3 bg-[#030712] rounded-lg">
                  <span className="text-slate-400">Price per Day</span>
                  <span className="text-xl font-bold text-white">
                    ৳{service.pricePerDay}
                  </span>
                </div>
              </div>
              {/* Booking BTN */}
              <Link
                onClick={handleBookingClick}
                href={`/services/book/${service._id}`}
              >
                <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 cursor-pointer rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group">
                  <FaCalendarCheck className="group-hover:scale-110 transition-transform" />
                  Book This Service
                </button>
              </Link>
            </div>

            {/* Features */}
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-blue-900/30">
              <h3 className="text-lg font-bold text-white mb-4">
                Requirements
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {service.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" /> {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
