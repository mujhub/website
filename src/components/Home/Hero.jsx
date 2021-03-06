import React from "react";

import { H5, Type, Caption } from "../../styles/Shared/StyledTypes";
import { Hero as HeroDiv } from "../../styles/components/HomeStyles";
import { CallToActionButton } from "../../styles/Shared/Button";

// icons
import { FiDownload } from "react-icons/fi";

export const Hero = () => {
  return (
    <>
      <HeroDiv>
        <div className="desktop">
          <H5 style={{ margin: "1rem 0 1.5rem 0" }}>About us</H5>
          <Type>
            MUJ HUB is an application that caters to the day-to-day needs of any
            student in our university, from displaying the mess menu to ordering
            food from outlets. The app developed by fellow students aims at
            making your life at MUJ easier.
          </Type>

          <Type>
            Ever heard of effortless, that is what MUJ HUB is all about.
            Nonetheless, we strive harder each day to solve issues on campus
            with the use of technology and present the solutions to you in our
            student friendly interface.
          </Type>

          <Type>
            Bear with us as we launch our array of features in native Android
            and iOS applications very soon.
          </Type>
        </div>

        <div className="mobile">
          <div className="buttons">
            {/* <CallToActionButton Primary>
              <FaGooglePlay style={{ marginRight: "0.5rem" }} /> Get it on
              Google Play
            </CallToActionButton> */}
            <CallToActionButton Primary>
              <FiDownload style={{ marginRight: "0.5rem" }} /> Install The Web
              Application
            </CallToActionButton>
          </div>

          <Caption style={{ marginTop: "1rem" }}>
            COMING SOON TO PLAY STORE AND APP STORE
          </Caption>
        </div>
      </HeroDiv>
    </>
  );
};
