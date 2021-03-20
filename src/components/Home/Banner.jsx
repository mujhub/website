import React from "react";
import { BannerStyles } from "../../styles/components/HomeStyles.js";
import { Type, H6, Caption } from "../../styles/Shared/StyledTypes";

export const Banner = () => {
  return (
    <BannerStyles>
      <H6>Announcement</H6>
      <Type>
        You can now avail books and stationery for the semester on a rental
        basis at economical prices from local dealers around campus. Click Here
        to view your options!
      </Type>
    </BannerStyles>
  );
};
