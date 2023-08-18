import React from "react";
import { Carousel } from "flowbite-react/lib/esm/components";
import "./HeroSection.css";
//https://corsproxy.io/?

// add more data here
const carouselData = [
  {
    img: "https://corsproxy.io/?https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    heading: "Book your Car now.",
    desc: "The perfect car for your next trip is just around the corner",
  },
  {
    img: "https://corsproxy.io/?https://images.unsplash.com/uploads/14122621859313b34d52b/37e28531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    heading: "Book your Car now.",
    desc: "The perfect car for your next trip is just around the corner",
  },
  {
    img: "https://corsproxy.io/?https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    heading: "Book your Car now.",
    desc: "The perfect car for your next trip is just around the corner",
  },
];

const HeroSection = () => {
  return (
    <>
      <div className="h-56 sm:h-64 md:h-[90vh]">
        <Carousel slideInterval={5000}>
          {carouselData.map((c, i) => (
            <img src={c.img} key={i} alt={c.heading} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HeroSection;
