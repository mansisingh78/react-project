import MansImage from "../assets/mans.jpg";

function Card() {
  return (
    <>
      <div className=" flex   mt-[150px] w-[100%] bg-[#0A0A0C] cards">
        <div className=" w-[30%] h-auto object-cover rounded-lg right ml-[150px] left-card pt-9 pb-6">
          <img src={MansImage} alt="Mans" />
        </div>
        <div className=" ml-8 mt-12  rights">
          <h1 className="text-white text-2xl font-bold pb-2">
            I'm <span className="text-[#252137]">Oring</span>
          </h1>
          <p className="text-white pb-2 font-serif">
            i am creative designer and developer
          </p>
          <p className="text-[#656468] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore{" "}
            <br />
            praesentium molestias deserunt quos assumenda, facere quibusdam{" "}
            <br />
            delectus alias voluptatibus necessitatibus Reiciendis esse aliquid
            impedit <br /> mollitia sunt, ipsa ipsam voluptas consequuntur,
            sequi minima eveniet.
          </p>
          <p className="text-white pt-5">
            full name: mahi <br />
            Email:123@gmail.com <br /> mobile: 123456789
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
