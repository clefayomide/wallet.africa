import React from "react";
import Card from "../../layout/Card";
import HighlightWrapper from "../../layout/Highlight";
import Pages from "../../layout/Pages";
import TwoGrid from "../../layout/TwoGrid";
import Wrapper from "../../layout/Wrapper";
import Highlight from "../highlight/Highlight";
import { Heading } from "../typography/Typography";
import card_black from "../../assets/card-black.svg";
import card_blue from "../../assets/card-blue.svg";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Responsive from "../../layout/Responsive";

const CardThree = () => {
  return (
    <Responsive classNames={"bg-card_bg"}>
      <Card>
        <div className="pt-8 pb-8 lg:pt-0 lg:pb-0 h-full bg-card_bg">
          <Wrapper classNames={"justify-center"}>
            <Pages classNames={"w-[87%]"}>
              <TwoGrid
                className={"flex-col-reverse gap-3 lg:gap-0 lg:flex-row "}
              >
                <div className="w-full lg:w-[50%]">
                  <HighlightWrapper classNames={"gap-10 md:mt-16"}>
                    <Heading
                      text={"NEXT GENERATION CARDS"}
                      size={"text-[24px]"}
                    />
                    <HighlightWrapper classNames="gap-8 border-l-[0.5px] border-black">
                      {[1, 2, 3].map((i, index) => (
                        <Highlight
                          key={uuid()}
                          textHeading={"Lorem ipsum dolor sit amet"}
                          sizeHeading={"text-[30px]"}
                          textParagraph={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ."
                          }
                          sizeParagraph={"text-base"}
                          colorParagraph={"text-[#202328]"}
                          borderLeft={`${
                            index === 0
                              ? "border-l-[2px] border-[#000000]"
                              : "opacity-[0.3]"
                          }`}
                        />
                      ))}
                    </HighlightWrapper>
                    <div className="flex gap-5 items-center font-IBM pb-0 lg:pb-16 xl:pb-0 font-semibold cursor-pointer">
                      <div>Get Started</div>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </HighlightWrapper>
                </div>
                <div className="relative w-fit mt-5 md:mt-16">
                  <img
                    src={card_black}
                    alt="atm card"
                    className="w-[200px] h-[200px] md:w-auto md:h-auto "
                  />
                  <img
                    src={card_blue}
                    alt="atm card"
                    className="absolute -top-8 left-10 w-[200px] h-[200px] md:w-auto md:h-auto"
                  />
                </div>
              </TwoGrid>
            </Pages>
          </Wrapper>
        </div>
      </Card>
    </Responsive>
  );
};

export default CardThree;
