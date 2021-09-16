import React from "react";
import { Link } from "react-router-dom";
import { H3 } from "../../styles/Shared/StyledTypes";
import { Container as Flex } from "../../styles/Shared/Container";

const NotFound = () => (
  <div>
    <Flex p="0 5rem">
      <H3>
        Uh oh! We're lost, let's head back <Link to="/">home</Link> .
      </H3>
    </Flex>
  </div>
);

export default NotFound;
