import React from "react";
import Card from "../../layout/Card";
import Pages from "../../layout/Pages";
import TwoGrid from "../../layout/TwoGrid";
import Wrapper from "../../layout/Wrapper";
import { Heading } from "../typography/Typography";
import phone from "../../assets/phone.svg";
import box from "../../assets/box.svg";
import Highlight from "../highlight/Highlight";
import Responsive from "../../layout/Responsive";

const CardFour = () => {
  return (
    <Responsive classNames={"bg-dark_purple"}>

    <Card>
      <div className="pt-8 pb-8 lg:pt-0 lg:pb-0 h-full bg-dark_purple">
        <Wrapper classNames={"justify-center"}>
          <Pages classNames={"w-[87%]"}>
            <TwoGrid className={"flex-col-reverse gap-3 lg:gap-0 lg:flex-row "}>
              <div className="w-full lg:w-[60%]">
                <Heading
                  text={"Smart banking with transparent and cheaper fees..."}
                  size={"text-[30px] lg:pt-16 xl:pt-0"}
                  color={"text-white"}
                />
                <div className="mt-10 flex flex-col gap-16 lg:gap-5 xl:gap-16 lg:pb-16 xl:pb-0">
                  <Highlight
                    textHeading={"Flexible Wallet"}
                    sizeHeading={"text-[24px]"}
                    sizeParagraph={"text-[18px] md:w-[320px]"}
                    colorHeading={"text-white"}
                    colorParagraph={"text-zinc-500"}
                    textParagraph={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    }
                    icon={<img src={box} alt="box" className="pb-4" />}
                  />
                  <div className="flex flex-col md:flex-row gap-16 md:gap-5">
                    <Highlight
                      textHeading={"Virtual & Physical Cards"}
                      sizeHeading={"text-[24px]"}
                      sizeParagraph={"text-[18px]"}
                      colorHeading={"text-white"}
                      colorParagraph={"text-zinc-500"}
                      textParagraph={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                      }
                      icon={<img src={box} alt="box" className="pb-4" />}
                    />
                    <Highlight
                      textHeading={"Virtual Account Numbers"}
                      sizeHeading={"text-[24px]"}
                      sizeParagraph={"text-[18px]"}
                      colorHeading={"text-white"}
                      colorParagraph={"text-zinc-500"}
                      textParagraph={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                      }
                      icon={<img src={box} alt="box" className="pb-4" />}
                    />
                  </div>
                </div>
              </div>
              <div>
                <img src={phone} alt="mobile phone" />
              </div>
            </TwoGrid>
          </Pages>
        </Wrapper>
      </div>
    </Card>
    </Responsive>
  );
};

export default CardFour;
