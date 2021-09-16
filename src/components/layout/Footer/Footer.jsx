import React from "react";
import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";

import { FooterStyles } from "../../../styles/components/layout/FooterStyles";
import { Type } from "../../../styles/Shared/StyledTypes";
import { Divider } from "../../../styles/components/HomeStyles";

export const Footer = () => (
  <FooterStyles>
    <div className="FooterColumn">
      <Type className="love">Made with ❤️ by Team MUJ HUB</Type>
      <Divider />
      <div className="flex">
        <Type style={{ display: "flex", alignItems: "center" }}>
          <MdEmail style={{ marginRight: "0.5rem" }} />
          <a href="mailto:mujhub@gmail.com">mujhub@gmail.com</a>
        </Type>

        <div className="FooterLinks">
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
        </div>
      </div>
    </div>
  </FooterStyles>
);
