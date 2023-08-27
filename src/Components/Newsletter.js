import ractangle31 from "../Images/Rectangle 31.png";
import ractangle32 from "../Images/Rectangle 32.png";
import group73 from "../Images/Group 73.png";
function Newsletter() {
  return (
    <div
      id="contactUs"
      className=" w-[90%] h-[387px] flex justify-center relative items-center mb-[50px]"
    >
      <img className="absolute top-0 right-0" src={group73}></img>
      <img className="absolute bottom-0 left-0" src={ractangle32}></img>
      <div className=" w-[90%] h-[75%] bg-[#F4F9FF] flex justify-evenly items-center relative rounded-[75px]">
        <img
          className="absolute right-0 h-[292px] max-w-[543px] w-[40%]"
          src={ractangle31}
        ></img>
        <div className="flex flex-col gap-[20px]">
          <p className="font-semibold text-[40px] leading-[49.44px]">
            Subscribe Newsletter
          </p>
          <p className="ultra font-normal text-[18px] leading-[28.8px] text-[#757575] ">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className="relative w-[479px]">
          <input
            placeholder="Enter your email address.."
            className=" p-[35px] w-full h-[80px] ultra rounded-[60px] border-[1px] drop-shadow-md"
          ></input>
          <a href="mailto:hr@leanplatformtechnologies.com">
            <button className="absolute right-2.5 top-2.5 h-[60px] w-[35%] rounded-[60px]  hover:bg-[#2937b0] bg-[#2639ED] text-[white] font-normal text-[16px] leading-[19.78px] ultra">
              Contact Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
