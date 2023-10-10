import React, { useState } from "react";
import { Box, NumberField, Text, TextField } from "gestalt";

type Prop = {
  id?: string;
  placeholder?: string;
  name: string;
  label?: string;
  disabled?: boolean;
  tooltip?: string;
  type?: "date" | "email" | "password" | "text" | "url" | "number";
  col?: Pick<React.ComponentProps<typeof Box>, "column">;
  helperText?: string;
  errorMessage?: string;
  value?: string;
  validationErrors?: Array<{
    field: string;
    message: string;
  }>;
  overrideValue?: string;
  onChange?: (str: string) => void;
  onBlur?: (str: string) => void;
};

type NumberState = void | number;

export default function TextFieldWrapper({
  id,
  placeholder,
  name,
  label,
  disabled = false,
  type = "text",
  col,
  helperText,
  value: inputValue = "",
  errorMessage,
  validationErrors,
  overrideValue,
  onChange,
  onBlur,
}: Prop) {
  const [value, setValue] = useState<string>(inputValue);
  const [numberValue, setNumberValue] = useState<NumberState>(
    Number(inputValue) || undefined,
  );

  // Handle Error Messages
  const error: void | { message: string } = validationErrors?.find(
    (i) => i.field === name,
  );
  const errorMsg: string = error?.message || errorMessage || "";

  const updatedValue = overrideValue || value;
  const updatedNumberValue: NumberState = Number(overrideValue) || numberValue;

  return (
    // @ts-ignore
    <Box smColumn={col || 6} column={12} padding={2} flex="grow">
      {type === "number" ? (
        <NumberField
          id={id || name}
          disabled={disabled}
          name={name || id}
          placeholder={placeholder || label || name}
          errorMessage={errorMsg}
          onChange={({ value }) => setNumberValue(value)}
          value={updatedNumberValue || undefined}
          size="lg"
          label={label || ""}
        />
      ) : (
        <TextField
          id={id || name}
          disabled={disabled}
          name={name || id}
          onChange={({ value }) => {
            if (onChange) {
              onChange(value);
            }
            setValue(value);
          }}
          onBlur={({ value }) => {
            if (onBlur) {
              onBlur(value);
            }
            setValue(value);
          }}
          placeholder={placeholder || label || name}
          errorMessage={errorMsg}
          value={updatedValue}
          type={type}
          size="lg"
          label={label || ""}
        />
      )}
      {helperText && (
        <Box paddingY={1}>
          <Text color="subtle" size="100">
            {helperText}
          </Text>
        </Box>
      )}
    </Box>
  );
}
