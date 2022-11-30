import React from "react";
import Card from "../../layout/Card";
import Pages from "../../layout/Pages";
import Responsive from "../../layout/Responsive";
import Wrapper from "../../layout/Wrapper";
import { Heading } from "../typography/Typography";

const CardTwo = () => {
  return (
    <Responsive classNames={"bg-card_bg"}>
      <Card>
        <div className="pt-5 pb-8 lg:pt-0 lg:pb-0 h-screen bg-[#0C0B0B] bg-[url('/src/assets/card-two-bg.jpeg')] bg-cover bg-top bg-no-repeat">
          {/* <Wrapper classNames={"justify-start"}> */}
          <Pages classNames={"w-[87%]"}>
            <div className="pt-5 md:pt-16">
              <Heading
                text={
                  "Designed for swift payments, transparency, and instant settlement."
                }
                size={"text-[30px] lg:text-[40px] text-center"}
              />
            </div>
          </Pages>
          {/* </Wrapper> */}
        </div>
      </Card>
    </Responsive>
  );
};

export default CardTwo;
