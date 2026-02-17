"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { CircularProgress, Box } from "@mui/material";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClipboardList,
} from "react-icons/fa";

const BookingForm = ({ id }) => {
  const { data: session } = useSession();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // সার্ভিস ডাটা ফেচ করা
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`/api/services/${id}`);
        setService(response.data.data);
      } catch (error) {
        toast.error("Failed to load service details!");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchService();
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const bookingDetails = {
      // ইউজার ইনফো
      bookedBy: session?.user?.email,
      userName: session?.user?.name,
      // ফর্ম ইনফো
      phone: formData.get("phone"),
      address: formData.get("address"),
      date: formData.get("date"),
      instruction: formData.get("instruction"),
      // সার্ভিস ইনফো (সম্পূর্ণ অবজেক্ট)
      serviceInfo: {
        serviceId: service._id,
        title: service.title,
        price: service.pricePerHour || service.pricePerDay,
        category: service.category,
        image: service.mainImage,
      },
      status: "pending",
      createdAt: new Date(),
    };

    try {
      // আপনার বুকিং এপিআই রাউট এখানে হবে (যেমন: /api/bookings)
      const res = await axios.post("/api/services/book", bookingDetails);
      if (res.status === 200 || res.status === 201) {
        toast.success("Booking successful! We will contact you soon.");
        e.target.reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-[#0f172a] border border-blue-900/30 p-8 rounded-2xl shadow-xl my-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Book Service</h2>
        <p className="text-blue-400 font-medium">Service: {service?.title}</p>
      </div>

      <form
        onSubmit={handleBooking}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Read-only Fields */}
        <div className="space-y-2">
          <label className="text-slate-400 text-sm">Your Email</label>
          <input
            type="email"
            value={session?.user?.email || ""}
            readOnly
            className="w-full bg-[#030712] border border-slate-700 p-3 rounded-lg text-slate-500 cursor-not-allowed"
          />
        </div>

        <div className="space-y-2">
          <label className="text-slate-400 text-sm">Service Price (Est.)</label>
          <input
            type="text"
            value={`৳${service?.pricePerHour || service?.pricePerDay}`}
            readOnly
            className="w-full bg-[#030712] border border-slate-700 p-3 rounded-lg text-blue-400 font-bold"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-2">
          <label className="text-slate-400 text-sm flex items-center gap-2">
            <FaPhoneAlt size={12} /> Phone Number
          </label>
          <input
            name="phone"
            type="text"
            required
            placeholder="017XXXXXXXX"
            className="w-full bg-[#030712] border border-slate-700 p-3 rounded-lg text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <div className="space-y-2">
          <label className="text-slate-400 text-sm flex items-center gap-2">
            <FaCalendarAlt size={12} /> Preferred Date
          </label>
          <input
            name="date"
            type="date"
            required
            className="w-full bg-[#030712] border border-slate-700 p-3 rounded-lg text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-slate-400 text-sm flex items-center gap-2">
            <FaMapMarkerAlt size={12} /> Full Address
          </label>
          <input
            name="address"
            type="text"
            required
            placeholder="House no, Road no, Area..."
            className="w-full bg-[#030712] border border-slate-700 p-3 rounded-lg text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-slate-400 text-sm flex items-center gap-2">
            <FaClipboardList size={12} /> Special Instructions (Optional)
          </label>
          <textarea
            name="instruction"
            rows="3"
            placeholder="Any specific requirements..."
            className="w-full bg-[#030712] border border-slate-700 p-3 rounded-lg text-white focus:border-blue-500 outline-none transition"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="md:col-span-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {submitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Confirm Booking"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
