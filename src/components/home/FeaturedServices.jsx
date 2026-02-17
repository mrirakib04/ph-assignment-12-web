"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaUserMd } from "react-icons/fa";
import Link from "next/link";
import { CircularProgress, Box } from "@mui/material";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/services/home");
        setServices(response.data.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeServices();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-[#0f172a] w-full">
      <div className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
                Top Rated
              </h2>
              <p className="text-4xl font-bold text-white">Featured Services</p>
            </div>
            <Link href="/services">
              <button className="bg-slate-800 cursor-pointer hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                View All Services
              </button>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-[#030712] rounded-3xl overflow-hidden border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 group shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.mainImage}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-1.5 text-yellow-500 text-sm">
                      <FaStar />
                      <span className="font-bold text-white">
                        {service.rating}
                      </span>
                      <span className="text-slate-400">
                        ({service.totalReviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold">
                      <FaUserMd />
                      {service.experienceRequired}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  <div className="flex justify-between items-center pt-5 border-t border-slate-800">
                    <p className="text-lg font-bold text-white">
                      ৳{service.pricePerDay || service.pricePerHour}
                      <span className="text-sm text-slate-400 font-normal">
                        /day
                      </span>
                    </p>
                    <Link href={`/services/${service._id}`}>
                      <button className="flex items-center cursor-pointer gap-2 bg-slate-800 hover:bg-blue-600 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-all duration-300">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
