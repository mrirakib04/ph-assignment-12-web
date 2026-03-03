"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";

const TeamClient = ({ teamMembers }) => {
  return (
    <div className="min-h-screen bg-[#030712] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/10 mb-4 border border-blue-500/20">
            <FaUsers className="text-3xl md:text-4xl text-blue-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-500 to-purple-600 leading-tight">
            Meet Our Dedicated Team
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            The passionate individuals who make Care.io possible, committed to
            excellence and innovation in caregiving solutions.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#0f172a] rounded-4xl border border-slate-800 p-8 text-center flex flex-col items-center hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-slate-700 hover:border-blue-500 transition-colors duration-300 transform hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Member Info */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {member.name}
              </h2>
              <p className="text-blue-400 font-semibold text-base mb-4">
                {member.role}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                {member.bio}
              </p>

              {/* Contact Number */}
              <div className="flex items-center justify-center gap-2 text-slate-300 text-sm mb-6">
                <FaPhoneAlt className="text-blue-500 text-xs" />
                <span>{member.contact}</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.facebook && (
                  <Link
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-600 transition-colors text-xl"
                  >
                    <FaFacebookF />
                  </Link>
                )}
                {member.social.instagram && (
                  <Link
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-pink-600 transition-colors text-xl"
                  >
                    <FaInstagram />
                  </Link>
                )}
                {member.social.linkedin && (
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-700 transition-colors text-xl"
                  >
                    <FaLinkedinIn />
                  </Link>
                )}
                {member.social.x && (
                  <Link
                    href={member.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-200 transition-colors text-xl"
                  >
                    <FaTwitter />
                  </Link>
                )}
                {member.social.github && (
                  <Link
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-purple-500 transition-colors text-xl"
                  >
                    <FaGithub />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note (Optional) */}
        <div className="mt-20 text-center border-t border-slate-900 pt-10 text-slate-600 text-sm">
          <p>© 2026 Care.io - United by a passion for care.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamClient;
