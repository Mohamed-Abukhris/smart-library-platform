import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Slow Down — You’re Sending Requests Too Quickly!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        You have sent too many requests in a short period. Please try again
        later
      </p>
    </main>
  );
};
export default Page;
