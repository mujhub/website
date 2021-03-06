import React from "react";
import { H6, Type } from "../../styles/Shared/StyledTypes";
import { Card } from "../../styles/components/TeamStyles";

import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

// import
export const TeamCard = (props) => {
  const { links } = props;
  return (
    <Card>
      {/* <img src={props.image} alt={props.name} /> */}
      <H6>{props.name}</H6>
      <Type>{props.post}</Type>
      {links.map((link) => {
        let icon;
        switch (link.icon) {
          case "Linkedin":
            icon = <FaLinkedin size="24px" />;
            break;
          case "Github":
            icon = <FaGithub size="24px" />;
            break;
          default:
            icon = <FaLink size="24px" />;
            break;
        }
        return <a href={link.href}>{icon}</a>;
      })}
    </Card>
  );
};
