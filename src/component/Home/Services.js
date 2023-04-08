import React from "react";
import { FaCarAlt, FaMoneyBillAlt, FaHeadphones } from "react-icons/fa";
import { MdSupport } from "react-icons/md";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Free Shipping",
      details: "For all oder over $99",
      icon: <FaCarAlt />,
    },
    {
      id: 2,
      name: "Money Back Guarantee",
      details: "If good have Problems",
      icon: <FaMoneyBillAlt />,
    },
    {
      id: 3,
      name: "Online Support 24/7",
      details: "Dedicated support",
      icon: <MdSupport />,
    },
    {
      id: 4,
      name: "Payment Secure",
      details: "100% secure payment",
      icon: <FaHeadphones />,
    },
  ];
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto p-10 grid grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex justify-center items-center">
            <div className="mr-3">
              <p className="text-5xl text-red-700">{service.icon}</p>
            </div>
            <div className="pl-4">
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-base text-gray-400">{service.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
