"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle, FaCamera, FaSpinner } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const ProfileProvider = () => {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const userEmail = session?.user?.email;

  // সেশন থেকে ডাটা লোড করা
  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        image: session.user.image || "",
      });
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) return toast.error("User email not found!");

    setLoading(true);
    try {
      const res = await axios.patch(
        `/api/update-profile/${userEmail}`,
        formData
      );

      if (res.data.success) {
        toast.success("Profile updated successfully!");

        await update({
          ...session,
          user: {
            ...session?.user,
            name: formData.name,
            image: formData.image,
          },
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!userEmail)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-white">
        <FaSpinner className="animate-spin text-4xl" />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#030712] py-12 px-4 w-full">
      <div className="max-w-xl mx-auto bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        <div className="h-32 bg-linear-to-r from-blue-600 to-indigo-700"></div>

        <div className="px-8 pb-8">
          <div className="relative -top-12 flex flex-col items-center">
            <div className="relative group">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-[#0f172a] object-cover shadow-xl"
                />
              ) : (
                <FaUserCircle className="w-32 h-32 text-slate-500 bg-[#0f172a] rounded-full border-4 border-[#0f172a]" />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaCamera className="text-white text-2xl" />
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white">
              {formData.name || "User Name"}
            </h2>
            <p className="text-slate-400 text-sm">{userEmail}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 -mt-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#1e293b] text-white rounded-xl py-3 px-4 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Profile Image URL
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full bg-[#1e293b] text-white rounded-xl py-3 px-4 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="https://image-link.com/profile.jpg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" /> Updating...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileProvider;
