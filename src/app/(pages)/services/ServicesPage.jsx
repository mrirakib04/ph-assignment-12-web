"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaSearch, FaFilter, FaStar } from "react-icons/fa";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/services`, {
        params: {
          search,
          category,
          page,
          limit: 12,
        },
      });
      setServices(response.data.data);
      setTotalPages(response.data.meta.totalPages);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [category, page]);

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Care Services
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Choose from our wide range of professional caregiving services
          tailored for your loved ones.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-[#0f172a] p-6 rounded-2xl border border-blue-900/30 shadow-xl">
        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search services (e.g. Baby Care)..."
            className="w-full bg-[#030712] border border-blue-900/50 rounded-xl py-3 px-12 focus:outline-none focus:border-blue-500 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchServices()}
          />
          <FaSearch className="absolute left-4 top-4 text-slate-500" />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <FaFilter className="text-blue-500" />
          <select
            className="bg-[#030712] border border-blue-900/50 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 text-slate-300 w-full cursor-pointer"
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            <option value="All">All Categories</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Elderly Care">Elderly Care</option>
            <option value="Sick Person Care">Sick Person Care</option>
            <option value="Special Care">Special Care</option>
          </select>
        </div>
      </div>

      {/* Services Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-80 bg-[#0f172a] rounded-2xl animate-pulse border border-blue-900/20"
            ></div>
          ))}
        </div>
      ) : services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="group bg-[#0f172a] rounded-2xl border border-blue-900/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.mainImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {service.serviceTag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">
                    {service.category}
                  </span>
                  <div className="flex items-center text-yellow-500 text-xs">
                    <FaStar className="mr-1" /> {service.rating}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs mb-4 line-clamp-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-blue-900/30 flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-blue-400">
                      ৳{service.pricePerHour}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      /hr
                    </span>
                  </div>
                  <Link
                    href={`/services/${service._id}`}
                    className="bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all border border-blue-600/30"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl text-slate-500">
            No services found match your criteria.
          </h2>
          <button
            onClick={() => {
              setSearch("");
              setCategory("All");
              fetchServices();
            }}
            className="mt-4 text-blue-500 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center mt-16 gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-[#0f172a] border border-blue-900/30 rounded-lg disabled:opacity-30 hover:border-blue-500 transition-all text-sm"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded-lg border transition-all text-sm font-bold ${
                page === i + 1
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-[#0f172a] border-blue-900/30 text-slate-400 hover:border-blue-500"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-[#0f172a] border border-blue-900/30 rounded-lg disabled:opacity-30 hover:border-blue-500 transition-all text-sm"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
