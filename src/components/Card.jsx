/* eslint-disable react/prop-types */
const Card = ({ icon, description, txtColor, buttonBackColor, buttonHoverBackColor}) => {
  const title = icon.split("/")[2].split("-")[1].split(".")[0].toUpperCase();

  return (
    <div className={`w-[327px] p-12 ${buttonBackColor} `}>
      <img src={icon} alt={title} className="mb-9" />
      <h2 className="font-bigShoulders font-bold text-[40px] text-very-light-gray my-[25px]">
        {title}
      </h2>
      <p className="font-lexendDeca leading-card text-white/75">{description}</p>
      <button className={`${txtColor} rounded-3xl bg-very-light-gray h-12 w-[146px] font-lexendDeca font-normal  mt-[25px] hover:cursor-pointer hover:text-very-light-gray hover:border-2 hover:border-very-light-gray ${buttonHoverBackColor}`}>
      Learn More
      </button>
    </div>
  );
};

export default Card;
