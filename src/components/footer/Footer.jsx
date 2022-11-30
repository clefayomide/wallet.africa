import { faSquareFontAwesome } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Pages from "../../layout/Pages";
import Responsive from "../../layout/Responsive";
import TwoGrid from "../../layout/TwoGrid";
import Logo from "../logo/Logo";
import { Heading, Paragraph } from "../typography/Typography";
import Items from "./Items";

const Footer = () => {
  return (
    <Responsive
      classNames={"bg-[#0C0B0B] border-t-[0.1px] border-gray-600"}
    >
      <footer className="w-full 2xl:w-[1500px] bg-[#0C0B0B] pt-8 pb-8 lg:pt-16 lg:pb-16">
        <Pages classNames={"w-[87%]"}>
          <div className="flex-col md:flex-row gap-10 md:gap-0 flex justify-between">
            <div className="w-full md:w-[20%]">
              <Logo />
            </div>
            <div className=" gap-10 md:gap-5 flex-wrap flex md:justify-between w-full md:w-[70%]">
              <Items
                heading={"About Us"}
                lists={["Company", "FAQs", "Careers", "Blog"]}
              />
              <Items
                heading={"Products"}
                lists={["For Customers", "For Businesses", "For Developers"]}
              />
              <Items
                heading={"Legals"}
                lists={["Privacy Policy", "Terms of Service", "KYC"]}
              />
              <Items
                heading={"Contact Us"}
                lists={["Telegram", "Hello!", "Press"]}
              />
            </div>
          </div>
        </Pages>
      </footer>
    </Responsive>
  );
};

export default Footer;
