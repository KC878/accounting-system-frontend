interface LocalTextPropType {
  text: string;
  sx?: object;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2";
  color?: string;
}

const projectedTotal: LocalTextPropType[] = [
  {
    text: "$422.69K",
    sx: {
      fontWeight: 600,
      fontFamily: "Arial, Hevetica, Roboto",
      fontSize: "1.4rem",
      color: "#2a2a2a",
    },
    variant: undefined,
  },
  {
    text: "Projected Total",
    variant: "subtitle2",
    color: "#a2a2a2",
  },
  {
    text: "▲ 28% Last Year",
    variant: "subtitle2",
    color: "#08abad",
    sx: {
      fontSize: "0.8rem",
    },
  },
];

const lastMonth: LocalTextPropType[] = [
  {
    text: "$422.69K",
    sx: {
      fontWeight: 600,
      fontFamily: "Arial, Hevetica, Roboto",
      fontSize: "1.4rem",
      color: "red",
    },
    variant: undefined,
  },
  {
    text: "Projected Total",
    variant: "subtitle2",
    color: "#a2a2a2",
  },
  {
    text: "▲ 28% Last Year",
    variant: "subtitle2",
    color: "#08abad",
    sx: {
      fontSize: "0.8rem",
    },
  },
];
export const metadata = {
  projectedTotal: projectedTotal,
};
