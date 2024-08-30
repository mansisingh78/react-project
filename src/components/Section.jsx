import { LuImage } from "react-icons/lu";
import { FaHornbill } from "react-icons/fa";
import { SiMxlinux } from "react-icons/si";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { MdOutlineNoPhotography } from "react-icons/md";
import { MdBrandingWatermark } from "react-icons/md";

function Section() {
  return (
    <>
      <h1 className="text-white mt-48 ml-[500px] text-2xl font-bold">
        What I Do?
      </h1>

      <div className=" icons grid grid-cols-3 gap-8 mt-16 px-4   justify-center  ">
        <div className=" flex flex-col items-center text-white bg-[#15141A] p-6  rounded-lg ">
          <LuImage className="text-blue-500 text-4xl " />
          <h1 className="text-white ">ui/ux</h1>
          <p className="text-white  ">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Labore <br /> commodi iste repudiandae dolor totam <br /> similique
            deserunt sit ab rerum impedit.
          </p>
        </div>
        <div className=" flex flex-col items-center text-white bg-[#15141A] p-6 rounded-lg ">
          <FaHornbill className="text-blue-500 text-4xl " />
          <h1 className="text-white">illustration</h1>
          <p className="text-white  ">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Labore <br /> commodi iste repudiandae dolor totam <br /> similique
            deserunt sit ab rerum impedit.
          </p>
        </div>
        <div className=" flex flex-col items-center text-white bg-[#15141A] p-6 rounded-lg ">
          <SiMxlinux className="text-blue-500 text-4xl" />
          <h1 className="text-white ">development</h1>
          <p className="text-white  ">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Labore <br /> commodi iste repudiandae dolor totam <br /> similique
            deserunt sit ab rerum impedit.
          </p>
        </div>
        <div className=" flex flex-col items-center text-white bg-[#15141A] p-6 rounded-lg ">
          <MdAutoAwesomeMotion className="text-blue-500 text-4xl" />
          <h1 className="text-white ">branding</h1>
          <p className="text-white  ">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Labore <br /> commodi iste repudiandae dolor totam <br /> similique
            deserunt sit ab rerum impedit.
          </p>
        </div>

        <div className=" flex flex-col items-center text-white bg-[#15141A] p-4 rounded-lg">
          <MdOutlineNoPhotography className="text-blue-500 text-4xl" />
          <h1 className="text-white ">motion</h1>
          <p className="text-white  ">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Labore <br /> commodi iste repudiandae dolor totam <br /> similique
            deserunt sit ab rerum impedit.
          </p>
        </div>
        <div className=" flex flex-col items-center text-white bg-[#15141A] p-6 rounded-lg">
          <MdBrandingWatermark className="text-blue-500 text-4xl" />
          <h1 className="text-white ">photography</h1>
          <p className="text-white  ">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Labore <br /> commodi iste repudiandae dolor totam <br /> similique
            deserunt sit ab rerum impedit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Section;
