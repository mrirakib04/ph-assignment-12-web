import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookedBy: {
      type: String, // User Email
      required: [true, "User email is required"],
    },
    userName: {
      type: String,
      required: [true, "User name is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    address: {
      type: String,
      required: [true, "Full address is required"],
    },
    date: {
      type: Date,
      required: [true, "Booking date is required"],
    },
    instruction: {
      type: String,
      trim: true,
    },
    serviceInfo: {
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
      },
      image: {
        type: String,
      },
      serviceBy: {
        type: String,
        required: false,
        default: "",
      },
    },
    caregiver: {
      type: String,
      required: false,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookSchema);

export default Booking;
