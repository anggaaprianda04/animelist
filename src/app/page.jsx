import React, { lazy } from "react";

const Home = lazy(() => import("@/components/Pages/Home"));

const Page = () => {
  return (
    <>
      <div className="absolute w-full min-h-screen mt-0 sm:-mt-4 rounded-br-2xl bg-gradient-to-b -z-0 from-color-primary"></div>
      <div className="relative px-6">
        <Home />
      </div>
    </>
  );
};

export default Page;
