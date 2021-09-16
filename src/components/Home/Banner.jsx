import React from "react";
import { Link } from "react-router-dom";

import { BannerStyles } from "../../styles/components/HomeStyles";
import { Type, H6 } from "../../styles/Shared/StyledTypes";

export const Banner = ({ platform }) => (
  <BannerStyles platform={platform}>
    <H6>Announcement</H6>
    <Type>
      You can now avail books and stationery for the semester on a rental basis
      at economical prices from local dealers around campus.
      <br />
      <br />
      <Link className="link" to="books">
        Click Here to view your options!
      </Link>
    </Type>
  </BannerStyles>
);
