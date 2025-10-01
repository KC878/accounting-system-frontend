import type { UserType, InputFieldType, HomeModeType, StatusType } from "@src/types/types";

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