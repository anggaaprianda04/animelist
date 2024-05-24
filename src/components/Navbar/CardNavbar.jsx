import Link from "next/link";

const CardNavbar = ({
  title,
  link,
  font = "font-medium",
  textColor = "text-color-white",
}) => {
  return (
    <Link
      href={link}
      className={`px-2 py-1 ${textColor} hover:font-light text-lg ${font} transition-colors rounded group  hover:text-color-white hover:decoration-4 hover:decoration-color-primary hover:underline hover:bg-color-dark hover:duration-75`}>
      {title}
    </Link>
  );
};

export default CardNavbar;
