"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaSpinner, FaTimesCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Link from "next/link";

const MyBookingsProvider = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  console.log(userEmail);

  useEffect(() => {
    if (!userEmail) return;

    const fetchBookings = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `/api/my-bookings/${userEmail}?search=${search}&page=${page}`
        );
        console.log(res);
        setBookings(res.data.data);
        setTotalPages(res.data.pagination.totalPages);
        setError(null);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to load your bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userEmail, page, search]);

  console.log("bookings", bookings);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  if (!userEmail)
    return (
      <div className="text-center py-20 text-white">
        Please login to view your bookings.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#030712] py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My Bookings
          </h1>

          <form onSubmit={handleSearch} className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by service or status..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0f172a] text-white rounded-full py-3 px-6 pl-12 border border-slate-700 focus:border-blue-500 outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </form>
        </div>

        {/* Loading / Error States */}
        {loading && (
          <div className="flex justify-center py-20 text-blue-500 text-3xl">
            <FaSpinner className="animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500 flex flex-col items-center gap-4">
            <FaTimesCircle size={40} />
            {error}
          </div>
        )}

        {/* Bookings Grid (3 Columns) */}
        {!loading && !error && bookings.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No bookings found.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-[#0f172a] p-6 rounded-3xl border border-slate-800 hover:border-blue-900 transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {booking.serviceInfo?.title}
                </h3>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold capitalize ${
                    booking.status === "confirmed"
                      ? "bg-green-950 text-green-300"
                      : booking.status === "pending"
                      ? "bg-yellow-950 text-yellow-300"
                      : "bg-red-950 text-red-300"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <p className="text-slate-300 text-sm mb-1">
                Date: {new Date(booking.date).toLocaleDateString()}{" "}
              </p>

              <p className="text-slate-300 text-sm mb-4">
                Price: ৳{booking.serviceInfo?.price}
              </p>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  href={`/services/${booking.serviceInfo.serviceId}`}
                  className="text-blue-400 text-sm font-semibold hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-6 py-2 rounded-full bg-[#0f172a] text-white disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-slate-400">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-6 py-2 rounded-full bg-[#0f172a] text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsProvider;
