import stroke from "../Images/Stroke 5.png";
function Form() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <form className="w-[35%] relative h-[90%] flex flex-col items-center justify-center">
        <img className="w-[50%] absolute left-0 top-0" src={stroke}></img>
        <div className="flex flex-col h-[80%] gap-[10%] w-[60%] z-10">
          <p className=" font-bold form text-[24px] leading-[36px]">
            Let's get you started
          </p>
          <div className="flex flex-col justify-between h-[70%]">
            <div>
              <label className="form font-normal " htmlFor="name">
                Full Name
              </label>
              <br />
              <input
                className="form font-normal  w-full outline-none h-[30px] pl-[5%] border-[1px] border-[#CCCCCC] rounded-[4px] bg-transparent"
                required
                type="text"
                id="name"
                placeholder="Ade Tiger"
              ></input>
            </div>
            <div>
              <label className="form font-normal " htmlFor="email">
                Email address
              </label>
              <br />
              <input
                className="form font-normal  w-full h-[30px] outline-none border-[1px] pl-[5%] border-[#CCCCCC] rounded-[4px] bg-transparent"
                required
                type="text"
                id="email"
                placeholder="yourname@email.com"
              ></input>
            </div>
            <div>
              <label className="form font-normal " htmlFor="number">
                Phone Number
              </label>
              <br />
              <div className="w-full h-[30px] text-center border-[1px] border-[#CCCCCC] flex rounded-[4px] bg-transparent">
                <div className="form font-normal  w-[25%] pl-[10%] items-center flex h-[30px]">
                  +91
                </div>
                <input
                  className="w-[75%] form font-normal  outline-none float-right h-[30px] bg-transparent"
                  required
                  type="tel"
                  id="number"
                  placeholder="9876543210"
                ></input>
              </div>
            </div>
            <div>
              <label className="form font-normal " htmlFor="college">
                College Name
              </label>
              <br />
              <input
                className="w-full form font-normal  h-[30px]  outline-none border-[1px] pl-[5%] border-[#CCCCCC] rounded-[4px] bg-transparent"
                type="text"
                required
                id="college"
              ></input>
            </div>
            <button className="w-full h-[30px] form font-normal hover:bg-[#36637e] rounded-[4px] border-[1px] border-[black] bg-[#284A5E] text-[white]  text-[16px] leading-[24px]=">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
