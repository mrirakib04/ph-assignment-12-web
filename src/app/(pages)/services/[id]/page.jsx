import connectMongoDB from "@/lib/mongodb";
import ServiceDetails from "./ServiceDetails";
import Service from "@/models/service.model";

export async function generateMetadata({ params }) {
  const { id } = await params;

  await connectMongoDB();
  const service = await Service.findById(id);

  if (!service) {
    return { title: "Service Not Found | Care.xyz" };
  }

  return {
    title: `${service.title} | ${service.category} | Care.xyz`,
    description: service.shortDescription,
  };
}

const ServicePage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <ServiceDetails id={id}></ServiceDetails>;
};

export default ServicePage;
