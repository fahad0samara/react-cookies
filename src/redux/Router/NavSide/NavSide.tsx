import {useState} from "react";
import {Link} from "react-router-dom";
import SVGComponent from "../../../assets/svg/SVGComponent";

type NavSideProps = React.HTMLAttributes<HTMLElement>;

const NavSide: React.FC<NavSideProps> = ({}) => {
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  const linkClasses =
    "relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600 transition-colors duration-300 ease-in-out";

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-700 text-white">
      <h1 className="mt-10 ml-10 text-3xl font-bold">Dashboard</h1>
      <div className="mt-20 space-y-3">
        <Link
          key="List"
          to="/List"
          className={`${linkClasses} ${
            selectedLink === "/List"
              ? "bg-slate-600 text-white  animate-pulse"
              : ""
          }`}
          onClick={() => handleLinkClick("/List")}
        >
          <div>
            {selectedLink === "/List" && <SVGComponent />}
            <span className="">List</span>
          </div>
        </Link>
        <Link
          key="Hero"
          to="/"
          className={`${linkClasses} ${
            selectedLink === "/" ? "bg-slate-600 text-white  animate-pulse" : ""
          }`}
          onClick={() => handleLinkClick("/")}
        >
          <div>
            {selectedLink === "/" && <SVGComponent />}
            <span className="">Hero</span>
          </div>
        </Link>

        <Link
          key="Search"
          to="/Search"
          className={`${linkClasses} ${
            selectedLink === "/about"
              ? "bg-slate-600 text-white  animate-pulse"
              : ""
          }`}
          onClick={() => handleLinkClick("/about")}
        >
          <div>
            {selectedLink === "/Search" && <SVGComponent />}
            <span className="">Search</span>
          </div>
        </Link>

        <Link
          key="Swiper"
          to="/Swiper"
          className={`${linkClasses} ${
            selectedLink === "/Swiper"
              ? "bg-slate-600 text-white  animate-pulse"
              : ""
          }`}
          onClick={() => handleLinkClick("/Swiper")}
        >
          <div>
            {selectedLink === "/Swiper" && <SVGComponent />}
            <span className="">Swiper</span>
          </div>
        </Link>
        <Link
          key="Footer"
          to="/Footer"
          className={`${linkClasses} ${
            selectedLink === "/Footer"
              ? "bg-slate-600 text-white  animate-pulse"
              : ""
          }`}
          onClick={() => handleLinkClick("/Footer")}
        >
          <div>
            {selectedLink === "/Footer" && <SVGComponent />}
            <span className="">Footer</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavSide;
