import React from "react";

const Footer = () => {
  const dateYear = new Date().getFullYear();

  return (
    <div className="absolute left-0 right-0 max-w-full p-3 -bottom-20 bg-color-primary h-68">
      <p className="text-sm font-semibold text-center sm:text-base text-color-white">
        {`Copyright @ MyAnimeList ${dateYear}. Angga Aprianda`}
      </p>
    </div>
  );
};

export default Footer;
