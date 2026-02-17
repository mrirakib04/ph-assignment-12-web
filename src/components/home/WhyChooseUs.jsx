import { FaShieldAlt, FaUserCheck, FaClock, FaHeart } from "react-icons/fa";

const benefits = [
  {
    icon: FaShieldAlt,
    title: "Verified Experts",
    description:
      "All our caregivers undergo rigorous background checks and training.",
    color: "text-blue-500",
  },
  {
    icon: FaUserCheck,
    title: "Personalized Care",
    description:
      "Tailored care plans to meet the unique needs of your loved ones.",
    color: "text-green-500",
  },
  {
    icon: FaClock,
    title: "24/7 Availability",
    description:
      "Round-the-clock support to ensure safety and comfort anytime.",
    color: "text-yellow-500",
  },
  {
    icon: FaHeart,
    title: "Compassionate Approach",
    description:
      "We care for your family with the same love and dedication as our own.",
    color: "text-red-500",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#0f172a] py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Our Promise
          </h2>
          <p className="text-4xl font-bold text-white">
            Why Choose Our Services?
          </p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We are committed to providing reliable, compassionate, and
            professional care to enhance the quality of life for your family.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#030712] p-8 rounded-3xl border border-blue-900/30 flex flex-col items-center text-center hover:shadow-lg hover:shadow-blue-950/20 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`p-5 rounded-full bg-[#0f172a] border border-slate-800 mb-6`}
              >
                <benefit.icon className={`text-4xl ${benefit.color}`} />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
