import React from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import type { UserType } from "@src/types/types";
import type { FormProp } from "@src/interfaces/interfaces";

const fields: React.ElementType[] = [TextField, Select, MenuItem]; // declare this first

const Form: React.FC<FormProp> = ({
  formHeaderTitle,
  formData,
  handleChange,
  handleSubmit,
  input,
  buttonSubmitName,
  homeMode,
}) => {
  return (
    <div>
      {/* Box is default let i e  */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          margin: "auto",
          mt: 5,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        {/* Form Title */}
        <Typography variant="h5" mb={2} textAlign="center">
          {formHeaderTitle}
        </Typography>

        {input.map((item, index) => {
          const FieldType = fields[item.fieldOption];
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex justify-center items-center-safe gap-2 w-[30vw]"
            >
              <div>
                <Icon fontSize="large" />
              </div>

              <div className="flex-1">
                {(() => {
                  switch (FieldType) {
                    case TextField:
                      return (
                        <FieldType
                          key={index}
                          label={item.label}
                          name={item.name}
                          type={item.type}
                          value={formData[item.name as keyof UserType] ?? ""}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                          required
                          error={item.error ?? false}
                          helperText={item.helperText ?? ""}
                        />
                      );
                    case Select:
                      return (
                        <FormControl
                          fullWidth
                          margin="normal"
                          required
                          key={index}
                        >
                          <InputLabel>{item.label}</InputLabel>
                          <Select
                            name={item.name}
                            value={formData[item.name as keyof UserType] ?? ""}
                            onChange={handleChange}
                          >
                            {item.options?.map((option: any) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      );
                    default:
                      return null;
                  }
                })()}
              </div>
            </div>
          );
        })}

        {/* Declare and call all the fields here but make it dynamic like calling arr[] and setting attribute in that  */}
        {/* <FormControl fullWidth margin="normal" required>
          <InputLabel>Country</InputLabel>
          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="philippines">Philippines</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="japan">Japan</MenuItem>
          </Select>
        </FormControl> */}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {buttonSubmitName}
        </Button>
        <Button
          fullWidth
          sx={{ mt: 2 }}
          onClick={() =>
            homeMode.setHomeUI(homeMode.homeUI === "login" ? "signup" : "login")
          }
        >
          {homeMode.homeUI}
        </Button>
      </Box>
    </div>
  );
};

export default Form;
