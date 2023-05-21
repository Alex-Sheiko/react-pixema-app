import { StylesConfig } from "react-select";
import { Color } from "ui";

export const selectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    background: Color.SELECT_BG,
    minHeight: "56px",
    border: "1px solid transparent",
    borderRadius: "10px",
    padding: "12px 20px",
    textTransform: "capitalize",
    ":active": {
      borderColor: Color.PRIMARY,
    },
    ":focus": {
      borderColor: Color.PRIMARY,
    },
    ":hover": {
      borderColor: Color.PRIMARY,
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: Color.PRIMARY_TEXT,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "0",
    gap: "12px",
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "10px",
    background: Color.SELECT_BG,
    marginBottom: "0",
  }),
  menuList: (styles) => ({
    ...styles,
    borderRadius: "10px",
    background: Color.SELECT_BG,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: Color.PRIMARY_TEXT,
  }),
  option: (styles) => {
    return {
      ...styles,
      padding: "15px 20px",
      borderBottom: `1px solid ${Color.DARK}`,
      backgroundColor: "transparent",
      textTransform: "capitalize",
      ":hover": {
        color: Color.PRIMARY,
        cursor: "pointer",
      },
      ":active": {
        color: Color.PRIMARY,
      },
      ":focus": {
        color: Color.PRIMARY,
      },
    };
  },
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
