"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
      <div className="flex flex-col items-center justify-center">
        <FileSearch className="text-color-dark" size={64} />
        <h3 className="text-2xl font-bold text-color-white">Not Found</h3>
        <Link href="/">
          <button className="w-64 py-3 mt-2 text-xl font-semibold rounded-md hover:bg-opacity-90 hover:transition-all bg-color-accent text-color-dark px-7">
            HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
