import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/service.model";
import BookingForm from "./BookingForm";

export async function generateMetadata({ params }) {
  const { id } = await params;

  await connectMongoDB();
  const service = await Service.findById(id);

  if (!service) {
    return { title: "Service Not Found | Care.io" };
  }

  return {
    title: `Booking - ${service.title} | Care.io`,
    description: service.shortDescription,
  };
}

const BookingPage = async ({ params }) => {
  const { id } = await params;

  return <BookingForm id={id}></BookingForm>;
};

export default BookingPage;
