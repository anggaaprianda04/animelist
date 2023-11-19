const HeaderMenu = ({ title }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 text-3xl font-bold">{title}</div>
    </div>
  );
};

export default HeaderMenu;
