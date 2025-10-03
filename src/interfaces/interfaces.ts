import type { UserType, InputFieldType, HomeModeType, StatusType, LeftNavMetaData } from "@src/types/types";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface FormProp {
  formHeaderTitle: string;
  formData: UserType;
  setFormData?: React.Dispatch<React.SetStateAction<UserType>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: InputFieldType[];
  buttonSubmitName: string;
  homeMode: HomeModeType;
}


export interface NotificationProp {
  message: string;
  severity: "error" | "warning" | "info" | "success";
}


export interface ButtonProp {
  leftNavMetaData: LeftNavMetaData[];
  handleClick?: () => void;
  data?: string; // may change soon
  setPage?: React.Dispatch<React.SetStateAction<string>>;
}

