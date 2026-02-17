"use client";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactSupport = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Care.io's newsletter subscribed!");
    e.target.reset();
  };

  return (
    <div className="bg-[#0f172a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#030712] p-5 md:p-10 rounded-3xl border border-blue-900/30 shadow-2xl">
          {/* Left Side: Text and Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help? Contact Us
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Have questions about our services or need assistance with booking?
              Our support team is available 24/7 to help you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-blue-950 rounded-full text-blue-400">
                  <FaEnvelope />
                </div>
                <span>support@care.io</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-blue-950 rounded-full text-blue-400">
                  <FaPhoneAlt />
                </div>
                <span>+880 1234-567890</span>
              </div>
            </div>
          </div>

          {/* Right Side: Newsletter Form */}
          <div className="bg-[#0f172a] p-4 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-400 mb-6 text-sm">
              Subscribe to our newsletter for the latest updates and special
              offers.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="grow bg-[#030712] border border-slate-700 p-4 rounded-xl text-white focus:border-blue-500 outline-none transition"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition flex items-center justify-center gap-2"
              >
                Subscribe <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
