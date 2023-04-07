import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen container mx-auto flex justify-center">
        <div className="w-full max-w-2xl bg-white my-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-around items-center">
              <label>Full Name</label>
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
                className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-sm px-3 py-3"
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
            </div>
            <div className="flex justify-center">
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
                className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-sm mb-4 px-3 py-3"
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
            <div className="flex justify-center">
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
                className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-sm mb-4 px-3 py-3"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
