import React from "react";

import { H4, Type, Caption } from "../styles/Shared/StyledTypes";
import { Hero as HeroDiv } from "../styles/components/HomeStyles";
import { CallToActionButton } from "../styles/Shared/Button";

// icons
import { FiDownload } from "react-icons/fi";

export const Hero = () => {
  return (
    <>
      <HeroDiv>
        <div className="desktop">
          <H4 style={{ margin: "1rem 0 1.5rem 0" }}>MUJ HUB</H4>
          <Type>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
            morbi aenean diam nulla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Type>

          <Type>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
            morbi aenean diam nulla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Type>
        </div>

        <div className="mobile">
          <div className="buttons">
            {/* <CallToActionButton Primary>
              <FaGooglePlay style={{ marginRight: "0.5rem" }} /> Get it on
              Google Play
            </CallToActionButton> */}
            <CallToActionButton Primary>
              <FiDownload style={{ marginRight: "0.5rem" }} /> Install The
              Application
            </CallToActionButton>
          </div>

          <Caption>Coming soon to Android and iOS</Caption>
        </div>
      </HeroDiv>
    </>
  );
};
