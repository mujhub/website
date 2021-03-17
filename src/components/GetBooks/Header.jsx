import React from "react";
import { HeaderStyle } from "../../styles/components/BookStyles";

import { Type, H4, H6 } from "../../styles/Shared/StyledTypes";

const Header = () => {
  return (
    <HeaderStyle>
      <H4>Heading</H4>
      <Type>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Type>
      <H6>Sub Heading</H6>
      <Type>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </Type>
    </HeaderStyle>
  );
};

export default Header;
