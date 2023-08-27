import unsplash from "../Images/unsplash_bzqU01v-G54.png";
import playbtn from "../Images/play-rounded-button 1.png";
import Rectangle24 from "../Images/Rectangle 26.png";
import circle from "../Images/Ellipse 86.png";
function GreatSince() {
  return (
    <div className=" w-[85%] my-[60px] h-[436px] flex  ">
      <div className="relative">
        <img className=" max-w-[550px] w-[40vw] h-full " src={unsplash}></img>
        <img
          className="absolute top-[39%]  left-[41%] w-[5vw] cursor-pointer"
          src={playbtn}
        ></img>
        <img className="absolute right-0 bottom-0 -z-10" src={circle}></img>
      </div>
      <div className=" flex flex-col justify-evenly my-[60px] w-[50%] mx-[9%] relative">
        <img src={Rectangle24} className="absolute top-0 -left-10 -z-10"></img>
        <p className=" font-bold text-[40px] leading-[49.44px]">
          Great Digital Product Agency since 2016
        </p>
        <p className=" font-normal ultra text-[#565656] text-[16px] leading-[25.6px]">
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  );
}
export default GreatSince;
