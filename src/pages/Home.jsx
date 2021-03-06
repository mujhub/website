import React, { useContext } from "react";

// theme
import { ThemeContext } from "styled-components";

// icons
import { IoFastFood } from "react-icons/io5";
import { IoRestaurant } from "react-icons/io5";
import { IoSchool, IoHeart } from "react-icons/io5";

// components
import { Hero } from "../components/Home/Hero";
// import { MessMenuCard } from "../components/MessMenu";
import { MessMenuCard } from "../components/Mess/MessMenu";
import { FeatureCard } from "../components/Home/FeatureCards";

import { Container as Flex } from "../styles/Shared/Container";
import { Type, H4 } from "../styles/Shared/StyledTypes";
import {
  CardStack,
  Subheading,
  FormStyles,
} from "../styles/components/HomeStyles";
import { Button } from "../styles/Shared/Button";

const Home = (props) => {
  const theme = useContext(ThemeContext);

  // features
  const features = [
    {
      heading: "Mess Menu",
      desc:
        "Hungry during class and can't wait to see what's on the menu for lunch? Head over to MUJ HUB!",
      icon: <IoRestaurant size="24px" />,
      color: theme.GREEN2,
    },
    {
      heading: "DMS Integration",
      desc: "Having a tough time managing attendance? We got you covered.",
      icon: <IoSchool size="24px" />,
      color: theme.ORANGE,
    },

    {
      heading: "Eateries",
      desc:
        "Craving tasty food at night? View menus and order from any outlet through MUJ HUB.",
      icon: <IoFastFood size="24px" />,
      color: theme.PURPLE2,
    },
    {
      heading: "More Coming Soon..",
      desc:
        "Your one-stop solution to everything in MUJ is constantly working on new features.",
      icon: <IoHeart size="24px" />,
      color: theme.RED,
    },
  ];

  return (
    <>
      {/* hero section */}
      <Flex p="0 6rem" reverseOnMobile>
        <Hero />
        <MessMenuCard />
      </Flex>

      {/* features */}
      <Flex center column m="6rem 0 4rem 0">
        <Subheading>
          <H4 style={{ margin: "0 0 0.5rem 0" }}>Services We Offer</H4>
          <Type>
            We will launch the MUJHUB Android and iOS apps shortly! You can
            access all the features in the app.
          </Type>
        </Subheading>

        {/* feature cards */}
        <CardStack>
          {features.map((feature) => (
            <FeatureCard feature={feature} />
          ))}
        </CardStack>
      </Flex>

      {/* contact form */}
      <Flex column center>
        <Subheading>
          <H4 style={{ margin: "0 0 0.5rem 0" }}>Feedback</H4>
          <Type>We strive to improve our product,</Type>
        </Subheading>
        <FormStyles>
          <form action="/" method="post">
            <div>
              <label htmlFor="name">Full Name </label>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="message">Message </label>
              <textarea
                rows="5"
                cols="40"
                wrap="hard"
                type="text"
                name="message"
                id="message"
                placeholder="Message"
              />
            </div>
            <Button className="submitBtn" Primary>
              SUBMIT
            </Button>
          </form>
        </FormStyles>
      </Flex>
    </>
  );
};

export default Home;
