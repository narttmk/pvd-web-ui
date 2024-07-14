import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Title from "./Title";
import { FileUploadOutlined } from "@mui/icons-material";
export interface FieldProps {
  name: string;
  displayText?: string;
  type?: string;
  required?: boolean;
  maxLength?: string;
  minLength?: string;
  value?: any;
  hidden?: boolean;
}
export interface FormProps {
  onCancel: () => void;
  onSave: (data: { [key: string]: any }) => void;
  fields: FieldProps[];
  title?: string;
}

export const Form: React.FC<FormProps> = ({
  onCancel,
  onSave,
  fields,
  title,
}) => {
  const initValues: { [key: string]: any } = {};
  fields.forEach((field) => {
    if (field.value) {
      initValues[field.name] = field.value;
    }
  });
  const [formData, setFormData] = useState<{ [key: string]: any }>(initValues);
  const [formDataErrors, setFormDataErrors] = useState<{ [key: string]: any }>(
    {}
  );

  const handleSave = () => {
    let isValid = true;
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        setFormDataErrors({
          ...formDataErrors,
          [field.name]: `${field.displayText || field.name} is required`,
        });
        isValid = false;
      }
    });
    if (isValid) {
      onSave(formData);
      onCancel();
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <React.Fragment>
      {title && <Title>{title}</Title>}
      {fields
        ?.filter((field) => !field.hidden)
        .map((field: FieldProps) =>
          field.type === "file" ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={6}
            >
              <Button variant="contained" component="label">
                <FileUploadOutlined />
                Select files
                <input
                  hidden
                  id={field.name}
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={() => {
                    setFormData({
                      ...formData,
                      [field.name]: document.querySelector<HTMLInputElement>(
                        `#${field.name}`
                      )?.files,
                    });
                  }}
                />
              </Button>
            </Box>
          ) : (
            <TextField
              error={!!formDataErrors[field.name]}
              id={field.name}
              label={field.displayText || field.name}
              helperText={formDataErrors[field.name]}
              variant="filled"
              type={field.type || "text"}
              fullWidth={true}
              style={{ marginBottom: 16 }}
              defaultValue={field.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [field.name]: e.target.value,
                });
              }}
            />
          )
        )}
      <Button
        onClick={handleCancel}
        variant="outlined"
        color="error"
        style={{ marginRight: 16 }}
      >
        Cancel
      </Button>
      <Button onClick={handleSave} variant="outlined" color="primary">
        Save
      </Button>
    </React.Fragment>
  );
};
