import React from "react";
import {
  FaBriefcase,
  FaCheckCircle,
  FaBullseye,
  FaGraduationCap,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export const metadata = {
  title: "Careers || Care.io",
  description: "Join our mission to provide world-class caregiving services.",
};

const CareerPage = () => {
  const jobOpenings = [
    {
      id: "senior-care",
      title: "Senior Care Specialist",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "We are looking for a compassionate Senior Care Specialist to manage patient care plans and coordinate with medical professionals.",
      responsibilities: [
        "Develop and implement personalized care plans for elderly patients.",
        "Monitor patient health and report significant changes to medical staff.",
        "Provide emotional support and companionship to patients and their families.",
        "Ensure all care activities comply with healthcare regulations.",
      ],
      requirements: [
        "Bachelor’s degree in Nursing, Social Work, or a related field.",
        "Minimum 3 years of experience in geriatric care or home health.",
        "Strong communication and interpersonal skills.",
        "Valid certification in CPR and First Aid.",
      ],
    },
    {
      id: "full-stack",
      title: "Full Stack Developer (Next.js)",
      location: "Dhaka, Bangladesh (Hybrid)",
      type: "Full-time",
      description:
        "Join our tech team to build and maintain the core Care.io platform using modern web technologies.",
      responsibilities: [
        "Develop high-quality frontend components using Next.js and Tailwind CSS.",
        "Design and implement scalable backend APIs using Node.js and MongoDB.",
        "Optimize application performance and ensure cross-browser compatibility.",
        "Collaborate with the design team to implement intuitive UI/UX.",
      ],
      requirements: [
        "Proficiency in React, Next.js, and TypeScript.",
        "Experience with server-side rendering and API integration.",
        "Understanding of database management (NoSQL/SQL).",
        "Familiarity with authentication systems like NextAuth.js.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/10 mb-4 border border-blue-500/20">
            <FaBriefcase className="text-4xl text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">
            Open Positions
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our current openings and become a part of a team that truly
            makes a difference in people's lives.
          </p>
        </div>

        {/* Detailed Job Listings */}
        <div className="space-y-16 mb-24">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-[#0f172a] rounded-4xl border border-slate-800 overflow-hidden"
            >
              {/* Job Header */}
              <div className="p-8 md:p-12 border-b border-slate-800 bg-slate-900/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="md:text-3xl text-xl font-bold text-white mb-2">
                      {job.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500" />{" "}
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-blue-500" /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Job Body (JD) */}
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Responsibilities */}
                <div>
                  <h4 className="flex items-center gap-3 text-lg md:text-xl font-bold mb-6 text-blue-400">
                    <FaBullseye /> Key Responsibilities
                  </h4>
                  <ul className="space-y-4">
                    {job.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-slate-400 leading-relaxed"
                      >
                        <FaCheckCircle className="mt-1.5 text-blue-500 shrink-0 text-sm" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="flex items-center gap-3 text-xl font-bold mb-6 text-indigo-400">
                    <FaGraduationCap /> Requirements
                  </h4>
                  <ul className="space-y-4">
                    {job.requirements.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-slate-400 leading-relaxed"
                      >
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Instructions (No Buttons) */}
        <div className="bg-linear-to-b from-[#0f172a] to-transparent p-4 sm:p-10 md:p-16 rounded-[40px] border border-slate-800 text-center">
          <FaEnvelopeOpenText className="text-5xl text-blue-500 mx-auto mb-6" />
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-6">
            How to Apply
          </h2>
          <p className="text-slate-400 sm:text-base text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Interested candidates are requested to send their updated **Resume /
            CV** along with a **Cover Letter** explaining why they are a good
            fit for the position. Please mention the job title in the subject
            line.
          </p>

          <div className="inline-block p-3 sm:p-6 rounded-2xl bg-slate-900 border border-slate-700">
            <p className="text-slate-500 text-xs sm:text-sm uppercase tracking-widest mb-2">
              Send your application to
            </p>
            <p className="sm:text-2xl text-xl md:text-3xl font-mono font-bold text-blue-400 select-all">
              careers@care.io
            </p>
          </div>

          <p className="mt-8 text-slate-500 text-sm italic">
            * We usually respond to shortlisted candidates within 7 business
            days.
          </p>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 text-center text-slate-600 text-sm">
          © 2026 Care.io - We provide equal opportunities for all applicants.
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
