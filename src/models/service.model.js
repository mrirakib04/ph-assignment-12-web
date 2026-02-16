import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Service title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Baby Care", "Elderly Care", "Sick Person Care", "Special Care"],
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      maxlength: [150, "Short description cannot exceed 150 characters"],
    },
    fullDescription: {
      type: String,
      required: [true, "Detailed description is required"],
    },
    mainImage: {
      type: String,
      required: [true, "Main service image is required"],
    },
    galleryImages: [
      {
        type: String, // more 2/3 images
      },
    ],
    pricePerHour: {
      type: Number,
      required: [true, "Hourly rate is required"],
    },
    pricePerDay: {
      type: Number,
      required: [true, "Daily rate is required"],
    },
    features: [
      {
        type: String, // "24/7 Support", "Verified Caregivers", "Emergency Medical Kit"
      },
    ],
    requirements: [
      {
        type: String, // "Clean room for caregiver", "Detailed medical history"
      },
    ],
    availability: {
      type: String,
      default: "Available",
      enum: ["Available", "Coming Soon", "Paused"],
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    experienceRequired: {
      type: String, // "5+ Years", "Certified Nursing Background"
      default: "Verified Expert",
    },
    serviceTag: {
      type: String, // "Popular", "New", "Top Rated"
      default: "Professional",
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
