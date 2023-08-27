function Card({ image, heading, para, bgc }) {
  const style = {
    background: bgc,
  };
  return (
    <div className=" max-w-[308px] h-[379px] bg-white p-[40px] rounded-[1em] flex flex-col items-center text-center justify-evenly">
      <div
        className=" w-[45%] h-[35%] flex justify-center items-center rounded-[20px]"
        style={style}
      >
        <img src={image}></img>
      </div>
      <p className="ultra font-normal text-[24px] leading-[29.66px]">
        {heading}
      </p>
      <p className="ultra text-[#565656] font-normal text-[16px] leading-[22.4px]">
        {para}
      </p>
    </div>
  );
}

export default Card;
