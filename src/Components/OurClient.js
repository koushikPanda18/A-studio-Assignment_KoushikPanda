import googleLogo from "../Images/Google Logo.png";
import airbnbgo from "../Images/Airbnb Logo.png";
import uberEatsLogo from "../Images/Uber Eats Logo.png";
import amagonLogo from "../Images/Amazon Logo (1).png";
function OurClient() {
  return (
    <div className=" w-[85%] h-[124px] my-[30px] flex">
      <div className=" flex flex-col w-[30%] h-full justify-between">
        <p className="ultra font-bold leading-[49.44px]  text-[40px]">
          Our Client
        </p>
        <p className=" max-w-[336px] font-normal text-[18px] leading-[28.8px] text-[#757575]">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className=" flex w-[70%] justify-between items-center">
        <img className=" w-[10vw] h-[49.38px]" src={googleLogo}></img>
        <img className=" w-[10vw] h-[52.14px]" src={airbnbgo}></img>
        <img className=" w-[10vw] h-[27.73px]" src={uberEatsLogo}></img>
        <img className=" w-[10vw] h-[42.61px] mt-[20px]" src={amagonLogo}></img>
      </div>
    </div>
  );
}

export default OurClient;
