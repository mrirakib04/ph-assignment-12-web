import FaqClient from "./FaqClient";

// 1. Metadata for SEO (Only works in Server Components)
export const metadata = {
  title: "FAQ || Care.io",
  description:
    "Find answers to frequently asked questions about Care.io's professional caregiving services.",
};

const FAQPage = () => {
  // 2. Data defined here or fetched from an API/Database
  const faqs = [
    {
      id: "panel1",
      question: "What types of care services does Care.io provide?",
      answer:
        "Care.io provides a wide range of services including elderly care, childcare, post-operative support, and specialized nursing for chronic conditions.",
    },
    {
      id: "panel2",
      question: "How do I book a professional caregiver?",
      answer:
        "You can book by browsing our services, selecting your required plan, and filling out the booking form. Our team will contact you within hours.",
    },
    {
      id: "panel3",
      question: "Are the caregivers verified?",
      answer:
        "Yes, every caregiver undergoes a rigorous background check, professional certification verification, and mandatory sensitivity training.",
    },
    {
      id: "panel4",
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 24 hours prior to the service are free. Late cancellations may incur a small processing fee as per our terms.",
    },
  ];

  // 3. Passing data to the Client Component
  return <FaqClient faqs={faqs} />;
};

export default FAQPage;
