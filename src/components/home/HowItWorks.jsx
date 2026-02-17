import { FaSearch, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Browse Services",
    description: "Explore our wide range of professional caregiving services.",
    color: "text-blue-400",
  },
  {
    icon: FaCalendarAlt,
    title: "Book & Schedule",
    description: "Select your preferred date, time, and service package.",
    color: "text-green-400",
  },
  {
    icon: FaHandsHelping,
    title: "Receive Care",
    description: "Get verified and compassionate care right at your doorstep.",
    color: "text-purple-400",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#030712] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Simple Process
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white">
            How It Works
          </p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Booking professional care is now easier than ever. Follow these
            simple steps to get started.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-8 rounded-3xl border border-blue-900/30 flex flex-col items-center text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`p-6 rounded-full bg-[#030712] border border-slate-800 mb-8`}
              >
                <step.icon className={`text-5xl ${step.color}`} />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
