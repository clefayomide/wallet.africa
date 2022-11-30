import React from "react";
import Card from "../../layout/Card";
import Wrapper from "../../layout/Wrapper";
import Pages from "../../layout/Pages";
import { Heading, Paragraph } from "../typography/Typography";
import quote_right from "../../assets/quote_right.svg";
import quote_left from "../../assets/quote_left.svg";
import Responsive from "../../layout/Responsive";

const CardFive = () => {
  return (
    <Responsive classNames={"bg-[#0C0B0B]"}>
      <Card>
        <div className="pt-8 pb-8 lg:pt-16 lg:pb-16 h-full bg-[#0C0B0B]">
          <Wrapper classNames={"justify-center"}>
            <Pages classNames={"w-[87%]"}>
              <Heading
                text={"What our customers are saying…"}
                color={"text-[#FFFFFF] opacity-[0.9]"}
                size={"text-[30px]"}
              />
              <Paragraph
                text={
                  "We serve thousands of customers and this is what people are saying about us"
                }
                size={"text-base"}
                color={"text-[#FFFFFF] opacity-[10]"}
              />
              <div className="flex justify-center mt-10 md:mt-16">
                <div className="relative w-full md:w-[65%]">
                  <Heading
                    text={
                      "The Wallets payroll is seamless, the cards & sub wallets allow us to be flexible with payments and imprest to people outside of the main founding team. Hands down the Wallets team is the most responsive and customer-centric team I have ever worked with. Similar to Amazon’s focus on the customer I see Wallets having that same outlook"
                    }
                    color={"text-[#FFFFFF]"}
                    size={"md:text-[24px] md:text-center opacity-[0.6]"}
                  />
                  <img
                    src={quote_left}
                    alt="quote"
                    className="absolute -top-14 -left-20"
                  />
                  <img
                    src={quote_right}
                    alt="quote"
                    className="absolute -right-5 md:-right-44 top-[100px]"
                  />
                  <div className="flex gap-5 items-center mt-10">
                    <div className="w-[60px] h-[60px] md:w-[96px] md:h-[96px] rounded-full bg-white"></div>
                    <div>
                      <Heading
                        text={"Uzoma Ayogu"}
                        size={"text-lg"}
                        color={"text-[#FFFFFF]"}
                      />
                      <Paragraph
                        text={"Co-founder, Releaf (YC S17)"}
                        size={"text-base"}
                        color={"text-[#FFFFFF] opacity-[10]"}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="mt-16 flex gap-5">
                      {[1, 2, 3].map((i, index) => (
                        <div
                          key={index}
                          className={`rounded-full w-[23px] h-[23px] ${
                            index === 1 ? "bg-white" : "bg-[#707070]"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="mt-16 flex gap-5 items-center">
                      <div className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-arrow-left-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                          />
                        </svg>
                      </div>
                      <div className="w-[46px] h-[46px] bg-[#00C9B6] rounded-full flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-arrow-right-short text-white"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Pages>
          </Wrapper>
        </div>
      </Card>
    </Responsive>
  );
};

export default CardFive;
