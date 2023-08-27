import boxSearch from "../Images/box-search 1.png";
import wallet from "../Images/empty-wallet 1.png";
import ractangle25 from "../Images/Rectangle 25.png";
import ractangle24 from "../Images/Rectangle 24.png";
import dot from "../Images/Dot Ornament.png";
import eclepse87 from "../Images/Ellipse 87.png";
import code1 from "../Images/code-1 1.png";
import chart from "../Images/chart-square 1.png";
import Card from "./Card";
function HowCanWeHelp() {
  return (
    <div className=" w-[100%] ">
      <div className=" w-[95%] float-right h-[867px] flex relative">
        <img
          className="absolute right-0 top-[17%] h-[70%] -z-10 max-w-[1047px] w-[70vw]"
          src={ractangle24}
        ></img>
        <img src={dot} className="absolute bottom-[10%] left-[5%] -z-20"></img>
        <img
          src={ractangle25}
          className="absolute left-0 top-[32%] -z-10"
        ></img>
        <img
          src={eclepse87}
          className="absolute bottom-[4%] -z-20 right-[8%]"
        ></img>
        <div className="w-[396px] h-[180px] my-auto gap-5 flex flex-col mx-[40px] px-[10px]">
          <p className=" font-bold ultra text-[40px] leading-[49.44px] ">
            How can we help your Business ?
          </p>
          <p className=" text-[#565656] font-normal ultra text-[16px] leading-[25.6px]">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <div className="flex gap-[30px] mx-auto">
          <div className="flex flex-col gap-[30px]  mt-[15%]">
            <Card
              bgc={"#F1F7FF"}
              image={boxSearch}
              heading={"Business Idea Planning"}
              para={"We present you a proposal and discuss niffty-gritty like"}
            />
            <Card
              bgc={"#FFF2F8"}
              image={code1}
              heading={"Development Website and App"}
              para={"Communication protocols apart from engagement models"}
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Card
              bgc={"#FFF7E3"}
              image={wallet}
              heading={"Financial Planning System"}
              para={"Protocols apart from aengage models, pricing billing"}
            />
            <Card
              bgc={"#DEFFEE"}
              image={chart}
              heading={"Market Analysis Project"}
              para={"Protocols apart from aengage models, pricing billing"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowCanWeHelp;
