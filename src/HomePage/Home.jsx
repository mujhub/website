import React, { useContext } from "react";

// theme
import { ThemeContext } from "styled-components";

// icons
import { IoFastFood } from "react-icons/io5";
import { IoRestaurant } from "react-icons/io5";
import { IoSchool, IoHeart } from "react-icons/io5";

// components
import { Hero } from "../components/Hero";
import { MessMenuCard } from "../components/MessMenu";
import { FeatureCard } from "../components/FeatureCards";

import { Container as Flex } from "../styles/Shared/Container";
import { Type, H4 } from "../styles/Shared/StyledTypes";
import { CardStack } from "../styles/components/HomeStyles";

const Home = (props) => {
  const theme = useContext(ThemeContext);

  // features
  const features = [
    {
      heading: "DMS Integration",
      desc: "Check your attendance.",
      icon: <IoSchool size="24px" />,
      color: theme.ORANGE,
    },
    {
      heading: "Mess Menu",
      desc: "Checkout mess menu.",
      icon: <IoRestaurant size="24px" />,
      color: theme.GREEN2,
    },
    {
      heading: "Eateries",
      desc: "Menu and order to various outlets.",
      icon: <IoFastFood size="24px" />,
      color: theme.PURPLE2,
    },
    {
      heading: "More Coming Soon..",
      desc: "We are constantly adding new features to MUJHUB",
      icon: <IoHeart size="24px" />,
      color: theme.RED,
    },
  ];

  return (
    <>
      {/* hero section */}
      <Flex p="0 5rem" reverseOnMobile>
        <Hero />
        <MessMenuCard />
      </Flex>

      {/* features */}
      <Flex center column m="6rem 0">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <H4 style={{ margin: "0 0 0.5rem 0" }}>Services We Offer</H4>
          <Type>
            We will launch the MUJHUB Android and iOS apps shortly! You can
            access all the features in the app.
          </Type>
        </div>
        <CardStack>
          {features.map((feature) => (
            <FeatureCard feature={feature} />
          ))}
        </CardStack>
      </Flex>
    </>
  );
};

export default Home;
