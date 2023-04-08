import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

const BookingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full max-w-2xl bg-white my-10 py-8 shadow-lg rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between px-6 pt-6">
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
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs px-3 py-3 mx-2"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-red-600">
                  {message}
                </p>
              ))
            }
          />
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
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs px-3 py-3 mx-2"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-red-600">
                  {message}
                </p>
              ))
            }
          />
        </div>

        <div className="flex justify-between px-6 pt-6">
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
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs px-3 py-3 mx-2"
          />
          <ErrorMessage
            errors={errors}
            name="number"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-red-600">
                  {message}
                </p>
              ))
            }
          />
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
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs px-3 py-3 mx-2"
          />
          <ErrorMessage
            errors={errors}
            name="address"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-red-600">
                  {message}
                </p>
              ))
            }
          />
        </div>

        <div className="flex justify-between p-6">
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
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs px-3 py-3 mx-2"
          />
          <ErrorMessage
            errors={errors}
            name="city"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-red-600">
                  {message}
                </p>
              ))
            }
          />
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
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs px-3 py-3 mx-2"
          />
          <ErrorMessage
            errors={errors}
            name="zipcode"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-red-600">
                  {message}
                </p>
              ))
            }
          />
        </div>
        <button>Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
