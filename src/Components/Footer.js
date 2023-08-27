import fblogo from "../Images/facebook.png";
import twitterlogo from "../Images/twitter.png";
import linkedinlogo from "../Images/linkedin.png";
function Footer() {
  return (
    <div className=" w-[85%] h-[348px] py-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[30px]">
          <p className="font-[700] text-[24px] leading-[29.23px]">
            A+{" "}
            <span className="font-normal ultra text-[24px] leading-[29.66px]">
              Studio
            </span>
          </p>
          <p className="text-[#565656] w-[270px] font-normal text-[14px] leading-[22.4px] ultra">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className=" font-bold ultra text-[20px] leading--[24.72px]">
            What We Do
          </p>
          <p className="font-normal ultra text-[14px] leading-[28px]">
            <p>Web Design</p>
            <p>App Design</p>
            <p>Social Media Manage</p>
            <p>Market Analysis Project</p>
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className=" font-bold text-[20px] ultra leading--[24.72px]">
            Company
          </p>
          <p className=" font-normal text-[14px] ultra leading-[28px]">
            <p>About Us</p>
            <p>Career</p>
            <p>Become Investor</p>
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className=" font-bold text-[20px] ultra leading--[24.72px]">
            Support
          </p>
          <p className=" font-normal text-[14px] ultra leading-[28px]">
            <p>FAQ</p>
            <p>Policy</p>
            <p>Business</p>
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className=" font-bold text-[20px] ultra leading--[24.72px]">
            Contact
          </p>
          <p className=" font-normal ultra text-[14px] leading-[28px]">
            <p>WhatsApp</p>
            <p>Support 24</p>
          </p>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <img className=" cursor-pointer" src={fblogo}></img>
        <img className=" cursor-pointer" src={twitterlogo}></img>
        <img className=" cursor-pointer" src={linkedinlogo}></img>
      </div>
      <div className="w-[85%] bg-[#E4E4E4] h-[1px] my-[20px]"></div>
      <p className=" text-center font-normal text-[14px] leading-[22.4px] ultra text-[#A4A4A4]">
        Copyright © 2022 Avi Yansah
      </p>
    </div>
  );
}
export default Footer;
