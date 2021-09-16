import React from "react";

import { H4, Type, Caption } from "../../styles/Shared/StyledTypes";
import { Hero as HeroDiv } from "../../styles/components/HomeStyles";
import { Banner } from "./Banner";

import PWAInstallerBtn from "../Misc/PWAInstallerBtn";

import logoSq256 from "../../images/logoSq256.png";

export const Hero = () => (
  <>
    <HeroDiv>
      <div className="desktop">
        <img className="logo" alt="" src={logoSq256} />
        <H4 className="sectionHeading">
          Welcome to your one stop solution for everything in MUJ!
        </H4>
        <Type className="description">
          Bear with us as we launch our array of features in Android and iOS
          applications very soon.
        </Type>
        <Caption className="comingSoon">
          <span role="img" aria-label="star">
            ✨
          </span>{" "}
          COMING SOON TO PLAY STORE AND APP STORE{" "}
          <span role="img" aria-label="star">
            ✨
          </span>
        </Caption>
      </div>

      <div className="mobile">
        <div className="buttons">
          {/* <CallToActionButton Primary>
              <FaGooglePlay style={{ marginRight: "0.5rem" }} /> Get it on
              Google Play
            </CallToActionButton> */}
          <PWAInstallerBtn />
        </div>
        <Caption>
          If this does not work, try Options &gt; Add to Home Screen.
        </Caption>
      </div>
      <Banner platform="desktop" style={{ marginTop: "2rem" }} />
    </HeroDiv>
  </>
);
