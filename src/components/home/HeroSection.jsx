import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-blue-400 bg-blue-900/40 px-4 py-1.5 rounded-full">
              Trusted Caregiving Services
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight">
              Compassionate Care <br />
              <span className="text-blue-500">Right at Your Home</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              We provide professional and verified caregivers for your loved
              ones. From baby care to elderly support, we ensure safety,
              comfort, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20">
                  Explore Services <FaArrowRight />
                </button>
              </Link>
              <Link href="/about">
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image/Graphic Section */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-blue-900/20 absolute -top-10 -left-10 w-72 h-72 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
              alt="Caregiver helping an elderly person"
              className="relative rounded-3xl shadow-2xl border-4 border-blue-950/40 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
