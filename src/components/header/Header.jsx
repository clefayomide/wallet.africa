import React from "react";
import Pages from "../../layout/Pages";
import TwoGrid from "../../layout/TwoGrid";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Nav from "../nav-items/Nav";

const Header = () => {
  return (
    <header className="pt-5 font-IBM">
      <Pages classNames={"w-[90%]"}>
        <TwoGrid>
          <Logo />
          <TwoGrid gap={"md:gap-5 lg:gap-20"}>
            <Nav />
            <div className="hidden md:block">
              <Button element={"Log in"} icon={false} width={"w-[174px]"} />
            </div>
          </TwoGrid>
        </TwoGrid>
      </Pages>
    </header>
  );
};

export default Header;
