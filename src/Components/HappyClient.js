import character1 from "../Images/unsplash_MTZTGvDsHFY.png";
import group from "../Images/Group 71.png";
import eclepse from "../Images/Ellipse 87.png";
import dot from "../Images/Group 73.png";
import circle from "../Images/Ellipse 93.png";
function HappyClient() {
  return (
    <div className="w-[90%] h-[597px] justify-between flex flex-col">
      <div className="flex flex-col w-full text-center gap-[10px]">
        <p className=" font-bold ultra text-[40px] leading-[49.44px]">
          What our happy client say
        </p>
        <p className=" font-normal ultra text-[18px] text-[#757575] leading-[28.8px]">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className=" w-full flex items-center h-[80%] gap-[20px] ">
        <div className="relative h-[70%]">
          <img className=" w-[389px]" src={character1}></img>
          <img className="absolute -z-10 bottom-0 left-0 " src={eclepse}></img>
          <img className="absolute top-0 -z-10 right-5" src={dot}></img>
        </div>
        <div className="w-[412px] h-[185px] flex flex-col justify-between">
          <p className=" font-medium text-[24px] leading-[29.66px]">
            Matthew Paul
          </p>
          <p className=" font-normal ultra text-[16px] leading-[25.6px] text-[#565656]">
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
          <div className="flex gap-[25px]">
            <div className="w-[15px] cursor-pointer h-[15px] rounded-lg bg-[#2639ED]"></div>
            <div className="w-[15px] h-[15px] cursor-pointer rounded-lg bg-[#E7F0FC]"></div>
            <div className="w-[15px] h-[15px] rounded-lg cursor-pointer bg-[#E7F0FC]"></div>
            <div className="w-[15px] h-[15px] rounded-lg cursor-pointer bg-[#E7F0FC]"></div>
            <div className="w-[15px] h-[15px] rounded-lg bg-[#E7F0FC] cursor-pointer"></div>
          </div>
        </div>
        <div className="w-[348px] relative">
          <img src={group}></img>
          <img
            className="absolute left-[5%] bottom-[20%] -z-10"
            src={circle}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HappyClient;
