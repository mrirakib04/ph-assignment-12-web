import TeamClient from "./TeamClient";

export const metadata = {
  title: "Our Team || Care.io",
  description:
    "Meet the dedicated team behind Care.io, passionate about delivering exceptional care services.",
};

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Md Rakibul Islam Rakib",
      role: "Founder & Lead Dev",
      bio: "Visionary leader driving technical innovation and strategic direction. Rakib ensures Care.io stays at the forefront of digital care solutions.",
      image: "https://i.ibb.co/LzLj0Lqz/58.jpg",
      contact: "01955151970",
      social: {
        facebook: "https://facebook.com/MRI.Rakib04",
        instagram: "https://instagram.com/mrirakib04",
        linkedin: "https://linkedin.com/in/webdev-rakib",
        x: "https://x.com/mrirakib04",
        github: "https://github.com/mrirakib04",
      },
    },
    {
      id: 2,
      name: "Kushbula Ahmed Nahiyan",
      role: "Co-Founder",
      bio: "Co-founder spearheading operational excellence and user experience. Nahiyan is dedicated to fostering a supportive community.",
      image: "https://i.ibb.co/zwCYF8S/s3.jpg",
      contact: "0123456789",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/in/",
        x: "https://x.com/",
        github: "https://github.com/",
      },
    },
    {
      id: 3,
      name: "Aslam Ajhar",
      role: "Frontend Manager",
      bio: "Leads the frontend development, ensuring intuitive and responsive user interfaces that enhance the user journey.",
      image: "https://i.ibb.co/zwCYF8S/s3.jpg",
      contact: "0123456789",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/in/",
        x: "https://x.com/",
        github: "https://github.com/",
      },
    },
    {
      id: 4,
      name: "Karim H.",
      role: "Backend Manager",
      bio: "Oversees robust and scalable backend systems, ensuring seamless data flow and high performance for all Care.io services.",
      image: "https://i.ibb.co/zwCYF8S/s3.jpg",
      contact: "0123456789",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/in/",
        x: "https://x.com/",
        github: "https://github.com/",
      },
    },
    {
      id: 5,
      name: "Amina Rahman",
      role: "QA Lead",
      bio: "Ensures the highest quality standards for all features and services through meticulous testing and quality assurance protocols.",
      image: "https://i.ibb.co/zwCYF8S/s3.jpg",
      contact: "0123456789",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/in/",
        x: "https://x.com/",
        github: "https://github.com/",
      },
    },
    {
      id: 6,
      name: "Humaira Rahman",
      role: "DevOps Engineer",
      bio: "Manages infrastructure, deployment pipelines, and system reliability to ensure Care.io runs smoothly 24/7.",
      image: "https://i.ibb.co/zwCYF8S/s3.jpg",
      contact: "0123456789",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/in/",
        x: "https://x.com/",
        github: "https://github.com/",
      },
    },
  ];

  return <TeamClient teamMembers={teamMembers} />;
};

export default TeamPage;
