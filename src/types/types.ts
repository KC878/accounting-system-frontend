import { SvgIconProps } from "@mui/material/SvgIcon";

//  Form 
export type UserType = {
  username: string;
  password: string;
  email?: string;
  first_name?: string;
  last_name?: string;
};

export type InputFieldType = {
  fieldOption: number;
  label: string;
  name: string;
  type: string;
  error?: boolean;
  helperText?: string;
  inputRule?: {
    allowOnly?: "letters" | "numbers" | "lettersNumbers";
  };
  icon: React.ComponentType<SvgIconProps>;
};

export type HomeModeType = {
  homeUI: string;
  setHomeUI: React.Dispatch<React.SetStateAction<"login" | "signup">>;
}

export type StatusType = {
  error?: string;
  ok?: string;
  warning?: string;
}

export type LeftNavMetaData = {
  key: string;
  name: string;
  icon: React.ElementType;
}

export type DashboardData = {
  first_name: string;
  last_name: string;
  role: string;
}