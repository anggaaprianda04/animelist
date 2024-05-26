import Link from "next/link";
import React from "react";

const Header = ({ title, link }) => {
  return (
    <div className="flex items-center justify-between my-2 text-color-white hover:text-color-accent hover:transition-all">
      <p className="text-2xl font-bold">{title}</p>
      {link == null ? null : (
        <Link
          className="items-center text-sm font-semibold hover:text-indigo-600 sm:text-base hover:underline"
          href={link}>
          Show All
        </Link>
      )}
    </div>
  );
};

export default Header;
