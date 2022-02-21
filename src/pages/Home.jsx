import React, { useContext, useState } from "react";

// theme
import { ThemeContext } from "styled-components";

// icons
import { IoFastFood } from "react-icons/io5";
import { IoRestaurant } from "react-icons/io5";
import { IoSchool, IoHeart } from "react-icons/io5";

// components
import { Hero } from "../components/Home/Hero";
import { MessMenuCard } from "../components/Mess/MessMenu";
import { FeatureCard } from "../components/Home/FeatureCards";
import { Modal } from "../components/Modal/Modal";

import { Container as Flex } from "../styles/Shared/Container";
import { Type, H4, H6 } from "../styles/Shared/StyledTypes";
import {
  CardStack,
  Subheading,
  FormStyles,
} from "../styles/components/HomeStyles";
import { Button } from "../styles/Shared/Button";
import PlayStoreBadge from "../images/google-play-badge.png"

const Home = (props) => {
  const theme = useContext(ThemeContext);
  const [isModalOpen, setisModalOpen] = useState(true);

  // features
  const features = [
    {
      heading: "Mess Menu",
      desc: "Can't wait to see what's on the menu for lunch? Head over to MUJ HUB!",
      icon: <IoRestaurant size='24px' />,
      color: theme.GREEN2,
    },
    {
      heading: "DMS Integration",
      desc: "Having a tough time managing attendance? We got you covered.",
      icon: <IoSchool size='24px' />,
      color: theme.ORANGE,
    },

    {
      heading: "Eateries",
      desc: "Craving tasty food at night? View menus and order from any outlet through MUJ HUB.",
      icon: <IoFastFood size='24px' />,
      color: theme.PURPLE2,
    },
    {
      heading: "Coming Soon..",
      desc: "Your one-stop solution to everything in MUJ is constantly working on new features.",
      icon: <IoHeart size='24px' />,
      color: theme.RED,
    },
  ];

  return (
    <>
      {/* hero section */}
      <Flex p='0 5rem' reverseOnMobile>
        <Hero />
        <MessMenuCard />
      </Flex>

      {/* features */}
      <Flex center column m='5rem 0 4rem 0'>
        <Subheading>
          <H4 className='sectionHeading'>About Us</H4>
          <Type>
            MUJ HUB is an application that caters to the day-to-day needs of any
            student in our university, from displaying the mess menu to ordering
            food from outlets. The app developed by fellow students aims at
            making your life at MUJ easier.
          </Type>
          <H6 className='services'>Services Coming Soon</H6>
          <Type>
            Our array of features will be accessible via the native applications
            coming to <br />
            Play Store and App Store very soon!
          </Type>
        </Subheading>

        {/* feature cards */}
        <CardStack>
          {features.map((feature, i) => (
            <div key={i.toString()}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </CardStack>
      </Flex>

      {/* contact form */}
      <Flex column center>
        <Subheading>
          <H4 className='sectionHeading'>Feedback</H4>
          <Type>
            We promise to hear you out and help you in whatever way we can.{" "}
            <br />
            Found something cool and wish it existed on MUJ HUB? Put it in the
            form below!
          </Type>
        </Subheading>

        <FormStyles>
          <form
            name='Feedback'
            method='post'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <input type='hidden' name='form-name' value='Feedback' />
            <div>
              <label htmlFor='name'>Full Name </label>
              <input type='text' name='name' id='name' placeholder='Name' />
            </div>
            <div>
              <label htmlFor='message'>Message </label>
              <textarea
                rows='5'
                cols='40'
                wrap='hard'
                type='text'
                name='message'
                id='message'
                placeholder='Message'
              />
            </div>
            <Button className='submitBtn' type='submit' Primary>
              SUBMIT
            </Button>
          </form>
        </FormStyles>
      </Flex>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setisModalOpen(false)}
        title='Available on Google Play Store'
        action={
          <a href='https://play.google.com/store/apps/details?id=com.mujhub' target='_blank' rel='noopener noreferrer'>
            <img src={PlayStoreBadge} alt='Google Play Store' height="80px" />
          </a>
        }
      >
        🎉 Enim magna aliqua mollit eiusmod sunt velit ullamco. Exercitation Lorem cillum excepteur sunt cupidatat esse. 🎉
        Enim magna aliqua mollit eiusmod sunt velit ullamco. Exercitation Lorem cillum excepteur sunt cupidatat esse.Enim magna aliqua mollit eiusmod sunt velit ullamco. Exercitation Lorem cillum excepteur 
      </Modal>
    </>
  );
};

export default Home;
