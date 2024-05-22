import Link from "next/link";

const CardNavbar = ({ title, link, font }) => {
  return (
    <Link
      href={link}
      className={`px-2 py-1 font-bold hover:font-light text-lg ${font} transition-colors rounded group text-color-secondary hover:text-color-white hover:bg-color-dark hover:duration-75`}>
      {title}
    </Link>
  );
};

export default CardNavbar;
