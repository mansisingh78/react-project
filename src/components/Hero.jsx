/* eslint-disable react/no-unescaped-entities */
import BoyImage from "../assets/boy.jpg";

function Hero() {
  return (
    <>
      <div className=" flex hero ">
        <div className=" ml-[250px]  left">
          <h1 className="text-white  mt-24 text-5xl font-bold line pt-12 ">
            <span className="text-indigo-950">Hello</span> i'm <br /> Oring
            Essen
          </h1>
          <p className="text-white pt-7  ">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Accusamus, expedita nisi.
          </p>
          <button className="text-white rounded-3xl bg-[#927DC7] ml-[20px] px-3 py-2 mt-5">
            Download cv
          </button>
        </div>

        <div className="w-[35%] h-auto object-cover rounded-lg right ml-[150px] mt-[100px] ">
          <img src={BoyImage} alt="Boy" />
        </div>
      </div>
    </>
  );
}

export default Hero;
