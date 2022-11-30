import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-5 items-center">
          {["Why us", "Products", "About", "Pricing"].map((item) => (
            <li className="text-dark_gray" key={uuid()}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="bolck md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </nav>
    </>
  );
};

export default Nav;
