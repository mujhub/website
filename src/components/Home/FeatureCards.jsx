import React from "react";

import { Card } from "../../styles/components/HomeStyles";
import { H6, Type } from "../../styles/Shared/StyledTypes";

export const FeatureCard = props => {
  const { feature } = props;
  return (
    <Card className="desktop" color={feature.color}>
      <div className="icon">{feature.icon}</div>
      <div>
        <H6 style={{ marginBottom: "0.5rem" }}>{feature.heading}</H6>
        <Type>{feature.desc}</Type>
      </div>
    </Card>
  );
};
