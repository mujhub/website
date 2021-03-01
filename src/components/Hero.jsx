import React from "react";
import { H3, Type, Caption } from "../styles/Shared/StyledTypes";
import { Hero as HeroDiv } from "../styles/components/HomeStyles";
import { CallToActionButton } from "../styles/Shared/Button";
import { FaGooglePlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
export const Hero = () => {
  return (
    <>
      <HeroDiv>
        <div className="desktop">
          <H3 style={{ margin: "1rem 0" }}>MUJ HUB</H3>
          <Type>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
            morbi aenean diam nulla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Justo, morbi aenean diam nulla. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Justo, morbi aenean diam
            nulla.
          </Type>

          <Type>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
            morbi aenean diam nulla. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Justo, morbi aenean diam nulla. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Justo, morbi aenean diam
            nulla
          </Type>
        </div>

        <div className="mobile">
          <div className="buttons">
            <CallToActionButton Primary>
              <FaGooglePlay style={{ marginRight: "0.5rem" }} /> Get it on
              Google Play
            </CallToActionButton>
            <CallToActionButton Outline>
              <FiDownload style={{ marginRight: "0.5rem" }} /> Install The
              Application
            </CallToActionButton>
          </div>

          <Caption>Coming soon to iOS</Caption>
        </div>
      </HeroDiv>
    </>
  );
};
