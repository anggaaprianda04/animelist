const CardInformation = ({ title, detail }) => {
  return (
    <div className="flex items-start mr-4 font-semibold justify-items-start text-color-white">
      <p className="w-auto">{title} :</p>
      <p className="w-auto ml-2">{detail}</p>
    </div>
  );
};

export default CardInformation;
