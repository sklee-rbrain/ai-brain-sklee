import { FormHelperText, Stack, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * @title 💥DefaultForm 과 사용해야하는 날짜 폼
 * @memo 💥react-hook-form 의존성 컴포넌트
 */
const FormDate = ({ name, label, onChange, ...others }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <Stack direction="column" sx={{ width: "100%" }}>
          <TextField
            type="date"
            error={!!error}
            label={label}
            size="small"
            value={field?.value || ""}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            {...field}
            {...others}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {error?.message && (
            <FormHelperText error>{error?.message}</FormHelperText>
          )}
        </Stack>
      )}
    ></Controller>
  );
};

export default FormDate;
