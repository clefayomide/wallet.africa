import React from "react";
import Card from "../../layout/Card";
import TwoGrid from "../../layout/TwoGrid";
import Header from "../header/Header";
import Logo from "../logo/Logo";
import { Heading, Paragraph } from "../typography/Typography";
import holdingCard from "../../assets/holdingCard.svg";
import stars from "../../assets/stars.svg";
import Pages from "../../layout/Pages";
import Wrapper from "../../layout/Wrapper";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStoreIos,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import Responsive from "../../layout/Responsive";

const CardOne = () => {
  return (
    <Responsive classNames={"bg-[#0C0B0B]"}>
      <Card>
        <div className="pb-8 lg:pb-0 h-full bg-[#0C0B0B] bg-[url('/src/assets/card-one-bg.png')] bg-no-repeat">
          <Header />
          <Wrapper classNames={"justify-center"}>
            <Pages classNames={"w-[87%]"}>
              <TwoGrid className={"flex-col-reverse lg:flex-row "}>
                <div className="w-full md:w-[50%]">
                  <img src={stars} alt="three stars" />
                  <Heading
                    text={
                      <>
                        One digital wallet,
                        <br />
                        Multi Currency Cards...
                      </>
                    }
                    color={"text-white"}
                    size={"text-[30px] lg:text-[40px]"}
                  />
                  <Paragraph
                    text={
                      <>
                        Buy airtime, pay bills, perform money transfers and make
                        seamless payments everywhere from your digital wallet
                        and with our magic VISA cards."
                      </>
                    }
                    color={"text-[#FFFFFF]"}
                  />
                  <div className="flex gap-3 md:gap-5 mt-5">
                    <Button
                      element={"Get Started"}
                      width={"w-[174px]"}
                      icon={false}
                    />
                    <Button
                      element={
                        <FontAwesomeIcon
                          icon={faAppStoreIos}
                          className="w-6 h-6"
                        />
                      }
                      width={"w-[67px]"}
                      icon={true}
                    />
                    <Button
                      element={
                        <FontAwesomeIcon
                          icon={faGooglePlay}
                          className="w-6 h-6"
                        />
                      }
                      width={"w-[67px]"}
                      icon={true}
                    />
                  </div>
                </div>
                <div>
                  <img
                    src={holdingCard}
                    alt="a hand holding a card"
                    className="h-[480px]"
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

export default CardOne;
