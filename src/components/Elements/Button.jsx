const Button = ({ disabled, title, onClick }) => {
  return (
    <button
      disabled={disabled}
      className="px-5 py-1 text-xl rounded-md hover:transition-all hover:opacity-90 bg-color-primary text-color-white"
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
