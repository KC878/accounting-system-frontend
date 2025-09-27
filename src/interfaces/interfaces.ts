import type { UserType, InputFieldType } from "@src/types/types";

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
}