import type { UserType, InputFieldType, HomeModeType, LeftNavMetaData } from "@src/types/types";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

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

export interface AvatarProp {
  alt: string;
  src: string;
  badge: React.ReactNode;
  size: number;
}


export interface ClickableIconProps {
  className?: string,
  icon: React.ElementType;
  functionClick: (functionType: string) => void | string;
  functionType: string;
  color?: string;
  fontSize?: number;

}

export interface ClickableTextProps {
  outerClassName: string;
  innerClassName: string;
  functionClick: (functionType: string) => void | string;
  functionType: string;
  text: string;
}

export interface TextProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2" | "subtitle1" | "subtitle2";
  color?: string;
  sx?: object;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  className?: string;
}
