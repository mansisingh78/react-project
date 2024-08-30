function Nav() {
  return (
    <>
      <nav className="   flex justify-between text-white w-[100%] h-[100%] p-2 ">
        <div className="left">
          <h1 className="ml-[250px] text-3xl ">Oring</h1>
        </div>

        <div className="center">
          <ul className="flex gap-10">
            <li className="text-[#302C42]">Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Resume</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="right">
          <button className="text-white rounded-3xl bg-[#15141F] border-2 border-purple-900 border-solid  py-2 px-4 mr-64   ">
            view all
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
