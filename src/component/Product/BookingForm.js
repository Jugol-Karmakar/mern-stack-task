import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

const BookingForm = ({
  payment1Card,
  payment2Card,
  handleCard1,
  handleCard2,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => console.log(data);

  const [showPayment, setShowPayment] = useState(true);

  return (
    <div className="w-full bg-white shadow-lg rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-xl font-medium text-gray-700 pl-6 py-4">
          Shipping Information
        </h3>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <input
              {...register("name", {
                required: "Name is required.",
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Provide a Valid Name",
                },
              })}
              type="text"
              placeholder="Your Name"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-auto px-3 py-2"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600 pl-16 ml-2">
                    {message}
                  </p>
                ))
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
              type="text"
              placeholder="Email Address"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-auto px-3 py-2"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600 pl-16 ml-2">
                    {message}
                  </p>
                ))
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register("number", {
                required: "Number is required.",
                pattern: {
                  value: /[0-9]/,
                  message: "Provide a Valid Number",
                },
              })}
              type="text"
              placeholder="Phone Number"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-auto px-3 py-2"
            />
            <ErrorMessage
              errors={errors}
              name="number"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600 pl-16 ml-2">
                    {message}
                  </p>
                ))
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register("address", {
                required: "Address is required.",
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Provide a Your Address",
                },
              })}
              type="text"
              placeholder="Adress"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-auto px-3 py-2"
            />
            <ErrorMessage
              errors={errors}
              name="address"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600 pl-16 ml-2">
                    {message}
                  </p>
                ))
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register("city", {
                required: "City is required.",
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Provide a Your City",
                },
              })}
              type="text"
              placeholder="City/Country"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-auto px-3 py-2"
            />
            <ErrorMessage
              errors={errors}
              name="city"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600 pl-16 ml-2">
                    {message}
                  </p>
                ))
              }
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register("zipcode", {
                required: "Zipcode is required.",
                pattern: {
                  value: /[0-9]/,
                  message: "Provide a Your Zipcode",
                },
              })}
              type="number"
              placeholder="Zip Code"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-auto px-3 py-2"
            />
            <ErrorMessage
              errors={errors}
              name="zipcode"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600 pl-16 ml-2">
                    {message}
                  </p>
                ))
              }
            />
          </div>
        </div>
        <hr className="max-w-md mx-auto" />

        <div className="px-6 mb-4">
          <h3 className="py-3 text-lg font-medium text-gray-700">
            Payment Method
          </h3>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cradit"
              name="Cadit Card"
              className="cursor-pointer rounded h-5 w-5"
              onClick={() => setShowPayment(!showPayment)}
            />
            <label htmlFor="cadit" className="text-lg font-medium ml-2">
              Cadit Card
            </label>
          </div>
          {!showPayment && (
            <div className="flex flex-col max-w-md mx-auto">
              <input
                type="text"
                name=""
                placeholder="Card Number"
                className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all px-3 w-full max-w-xs py-2 mb-4"
              />
              <input
                type="text"
                name=""
                placeholder="Exp Date"
                className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all px-3 py-2 w-full max-w-xs mb-4"
              />
              <input
                type="text"
                name=""
                placeholder="Name on Card"
                className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all px-3 py-2 w-full max-w-xs"
              />
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="cradit"
              name="Cadit Card"
              className="cursor-pointer rounded h-5 w-5"
            />
            <label htmlFor="cadit" className="text-lg font-medium ml-2">
              Cash on Delivery
            </label>
          </div>
        </div>
        <button className="border border-black px-10 py-2 rounded text-base font-semibold text black hover:text-white hover:bg-black transition-all duration-300 my-4 ml-6">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
