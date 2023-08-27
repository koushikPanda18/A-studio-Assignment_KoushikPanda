import "./App.css";
import HeroHeadline from "./Components/HeroHeadline";
import Topmenu from "./Components/Topmenu";
import OurClient from "./Components/OurClient";
import Form from "./Components/Form";
import HowCanWeHelp from "./Components/HowCanWeHelp";
import Footer from "./Components/Footer";
import GreatSince from "./Components/GreatSince";
import Newsletter from "./Components/Newsletter";
import HappyClient from "./Components/HappyClient";
import { useState } from "react";

function App() {
  const [change, setChange] = useState(false);
  const handleMenuItemClick = (itemName) => {
    // console.log(`Clicked on ${itemName}`);
    setChange(true);
  };
  return (
    <div className=" w-full flex justify-center">
      {change ? (
        <Form />
      ) : (
        <div className=" w-[100%] items-center flex flex-col h-[100%]">
          <Topmenu handlechange={handleMenuItemClick} />
          <HeroHeadline />
          <OurClient />
          <HowCanWeHelp />
          <GreatSince />
          <HappyClient />
          <Newsletter />
          <div className="w-[85%] bg-[#E4E4E4] h-[1px]"></div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
