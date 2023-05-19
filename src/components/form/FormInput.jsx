import { FormHelperText, Stack, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * @title 💥DefaultForm 과 사용해야하는 인풋
 *  @memo 💥react-hook-form 의존성 컴포넌트
 */
const FormInput = ({ name, label, type, onChange, ...others }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <Stack
          direction="column"
          sx={{ width: "100%", margin: "10px 0", position: "relative" }}
        >
          <TextField
            label={label}
            type={type}
            variant="outlined"
            size={"small"}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            value={field.value}
            error={!!error}
            {...field}
            {...others}
          />
          {error?.message && (
            <FormHelperText
              error
              sx={{ position: "absolute", bottom: "-20px", fontSize: "12px" }}
            >
              {error?.message}
            </FormHelperText>
          )}
        </Stack>
      )}
    ></Controller>
  );
};

export default FormInput;
