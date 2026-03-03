"use client";
import {
  FaLifeRing,
  FaBook,
  FaUserCog,
  FaMoneyCheckAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
} from "react-icons/fa";
import { toast } from "react-toastify";

const HelpClient = () => {
  const supportCategories = [
    {
      icon: <FaBook className="text-blue-500" />,
      title: "User Guides",
      desc: "Learn how to set up your profile and book your first caregiver.",
    },
    {
      icon: <FaUserCog className="text-purple-500" />,
      title: "Account Settings",
      desc: "Manage your privacy, security, and personal preferences.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-green-500" />,
      title: "Payments & Refunds",
      desc: "Understand our billing cycles and refund policies.",
    },
    {
      icon: <FaLifeRing className="text-orange-500" />,
      title: "Caregiver Support",
      desc: "Resources for our professional partners and caregivers.",
    },
  ];

  const onContact = (e) => {
    e.preventDefault();

    toast.success("Message sent! Support team will contact you soon.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/10 mb-4 border border-blue-500/20">
            <FaCommentDots className="text-3xl md:text-4xl text-blue-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-500 to-purple-600">
            How can we help?
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Search our knowledge base or reach out to our 24/7 dedicated support
            team.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {supportCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-400 mb-8">
                If you couldn't find what you were looking for, please drop us a
                message.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Email Us
                  </p>
                  <p className="text-slate-200 font-medium">support@care.io</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <FaPhoneAlt className="text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Call Us
                  </p>
                  <p className="text-slate-200 font-medium">
                    +1 (800) CARE-NOW
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2 bg-[#0f172a] p-4 sm:p-8 md:p-12 rounded-4xl border border-slate-800">
            <form onSubmit={onContact} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#030712] border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#030712] border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Subject
                </label>
                <select className="w-full bg-[#030712] border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Technical Issue</option>
                  <option>Billing Question</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you today?"
                  className="w-full bg-[#030712] border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                Send Ticket
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center border-t border-slate-900 pt-10 text-slate-600 text-sm">
          Response time is typically under 4 hours for urgent care inquiries.
        </div>
      </div>
    </div>
  );
};

export default HelpClient;
