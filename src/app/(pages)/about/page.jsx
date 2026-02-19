import Link from "next/link";
import React from "react";
import {
  FaHeart,
  FaHandsHelping,
  FaLightbulb,
  FaUserMd,
  FaUsers,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "About Us || Care.io",
  description: "Learn more about Care.io, our mission, and our team.",
};

const AboutPage = () => {
  const features = [
    {
      icon: <FaHeart className="text-4xl text-blue-500" />,
      title: "Our Mission",
      description:
        "To provide top-quality, compassionate care services that enhance the quality of life for our clients and their families.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-indigo-500" />,
      title: "Our Vision",
      description:
        "To be the most trusted provider of comprehensive care solutions, recognized for our dedication and excellence.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Core Values",
      description:
        "Integrity, empathy, excellence, and safety are the pillars of our organization.",
    },
  ];

  const stats = [
    { icon: <FaUsers />, count: "10k+", label: "Happy Clients" },
    { icon: <FaUserMd />, count: "150+", label: "Expert Caregivers" },
    { icon: <FaCalendarCheck />, count: "25k+", label: "Bookings Done" },
    { icon: <FaAward />, count: "12+", label: "Service Awards" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">
            About Care.io
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Your trusted partner in providing exceptional care services. We are
            dedicated to making a difference in the lives of those we serve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800 hover:border-blue-900 transition-all duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-[#0f172a] p-10 md:p-16 rounded-3xl border border-slate-800 flex flex-col md:flex-row gap-10 items-center mb-24">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Care.io was founded on the belief that everyone deserves
              compassionate and high-quality care in the comfort of their own
              home. What started as a small local service has grown into a
              comprehensive care network.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our team consists of highly trained professionals dedicated to
              meeting the unique needs of every individual we work with.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/7NSzzmHL/suit-my-photo-edited-croped.jpg"
              alt="Team caring"
              className="rounded-2xl shadow-2xl object-cover w-full h-80 border border-slate-700"
            />
          </div>
        </div>

        {/* Statistics Section (NEW) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-linear-to-b from-[#0f172a] to-[#030712] p-8 rounded-3xl border border-slate-800 text-center"
            >
              <div className="text-blue-500 text-3xl flex justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-extrabold text-white mb-2">
                {stat.count}
              </h4>
              <p className="text-slate-400 uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Team / Call to Action Section (NEW) */}
        <div className="bg-linear-to-r from-blue-900/20 to-indigo-900/20 rounded-3xl border border-blue-900/30 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to join our team of caregivers?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            We are always looking for dedicated, professional and compassionate
            individuals to join our growing family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={"/register"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Join Us
            </Link>
            <Link
              href={"/help"}
              className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
