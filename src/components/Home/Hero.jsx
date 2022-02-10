import React from "react";

import { H4, Type, Caption } from "../../styles/Shared/StyledTypes";
import { Hero as HeroDiv } from "../../styles/components/HomeStyles";
import { Banner } from "../Home/Banner";

import PWAInstallerBtn from "../Misc/PWAInstallerBtn";

import logoSq256 from "../../images/logoSq256.png";
import { CallToActionButton } from "../../styles/Shared/Button";

export const Hero = () => {
  return (
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
            ✨ COMING SOON TO APP STORE ✨
          </Caption>
        </div>

        <div className="mobile">
          <div className="buttons">
            <CallToActionButton Primary onClick={()=>{window.open('https://play.google.com/store/apps/details?id=com.mujhub')}}>
              {/* <FaGooglePlay style={{ marginRight: "0.5rem" }} />  */}
              Get it on
              Google Play
            </CallToActionButton>
            {/* <PWAInstallerBtn /> */}
          </div>
          <Caption>
            If this does not work, try Options &gt; Add to Home Screen.
          </Caption>
        </div>
      </HeroDiv>
    </>
  );
};
