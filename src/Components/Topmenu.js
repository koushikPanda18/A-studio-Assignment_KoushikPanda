function Topmenu({ handlechange }) {
  return (
    <div className=" w-[85%]  flex h-[34px] items-center justify-between m-[42px]">
      <h3 className=" font-normal text-[27.15px] leading-[33.55px]">
        <span className="ultra font-bold text-[27.15px] leading-[33.07px]">
          A+
        </span>{" "}
        Studio
      </h3>
      <div className="w-[645px] flex justify-between  font-semibold  text-[16px] leading-[19.78px] tracking-[1%]">
        <p className="ultra  cursor-pointer hover:text-[#565656]">Home</p>
        <p className="ultra cursor-pointer  hover:text-[#565656]">What We do</p>
        <p
          className="ultra cursor-pointer  hover:text-[#565656]"
          onClick={() => {
            handlechange("clicked");
          }}
        >
          Service
        </p>
        <p className="ultra cursor-pointer  hover:text-[#565656]">Project</p>
        <p className="ultra cursor-pointer  hover:text-[#565656]">Blog</p>
        <p className="ultra cursor-pointer  hover:text-[#565656]">
          <a href="#contactUs">Contact</a>
        </p>
      </div>
    </div>
  );
}

export default Topmenu;
