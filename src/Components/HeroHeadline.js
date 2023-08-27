import image8 from "../Images/image8.png";
import dot from "../Images/Dot Ornament.png";
import ractangle23 from "../Images/Rectangle 23.png";
import eclepse from "../Images/Ellipse 85.png";
function HeroHeadline() {
  return (
    <div className="w-[100%]">
      <div className=" h-[608px] w-[92.5%] float-right  flex items-center justify-between relative">
        <div className=" max-w-[40%] w-[471px] mb-[10%] h-[50%] justify-between flex flex-col">
          <h3 className="ultra max-w-[462px] font-bold text-[40px] leading-[49.44px]">
            A Digital Product Agency
          </h3>
          <p className="ultra max-w-[471px] text-[#565656]">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className="ultra w-[215px] h-[20%] z-10 rounded-[60px] tracking-[6.5%] text-white font-normal text-[20px] hover:bg-[#2937b0] bg-[#2639ED] ">
            <a href="#contactUs">Contact Now</a>
          </button>
        </div>
        <img
          className=" absolute top-0 right-0 w-[60%] max-w-[754px] h-[512px]"
          src={image8}
        ></img>
        <img
          className=" absolute max-w-[404px] w-[30%] h-[154px] bottom-[13%] left-[-20px] -z-1"
          src={dot}
        ></img>
        <img
          className=" absolute bottom-0 -z-10 right-[10%] w-[20%] max-w-[178px]"
          src={ractangle23}
        ></img>
        <img
          className=" absolute top-0 right-[49%] -z-10 w-[20%] max-w-[129px]"
          src={eclepse}
        ></img>
      </div>
    </div>
  );
}

export default HeroHeadline;
