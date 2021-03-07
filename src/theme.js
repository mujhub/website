import {
  GRAY,
  COLOURS,
  BG_DARK,
  BG_LIGHT,
  BG_SECONDARY_DARK,
  BG_SECONDARY_LIGHT,
  PRIMARY,
  ACCENT,
} from "./constants/colours/colours";

const theme = {
  light: {
    id: 100,
    ...COLOURS,
    GRAY: GRAY,
    PRIMARY: PRIMARY,
    ACCENT: ACCENT,
    BG: BG_LIGHT,
    BG2: BG_SECONDARY_LIGHT,
    TEXT: GRAY[900],
    PLACEHOLDER: GRAY[600],
    DIVIDER: GRAY[400],
    FIELD: GRAY[0],
  },
  dark: {
    id: 200,
    ...COLOURS,
    GRAY: GRAY,
    PRIMARY: PRIMARY,
    ACCENT: ACCENT,
    BG: BG_DARK,
    BG2: BG_SECONDARY_DARK,
    TEXT: GRAY[100],
    PLACEHOLDER: GRAY[400],
    DIVIDER: GRAY[700],
    FIELD: GRAY[800],
  },
};

export default theme;
