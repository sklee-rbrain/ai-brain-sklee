import { FormHelperText, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * @title 💥DefaultForm 과 사용해야하는 기본 드랍다운 폼
 * @memo 💥react-hook-form 의존성 컴포넌트
 */
const FromDrop = ({ label, name, options, onChange, ...others }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Select
            options={options}
            {...field}
            error={!!error}
            value={field?.value || options[0].label}
            size="small"
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            {...others}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error?.message && (
            <FormHelperText error>{error?.message}</FormHelperText>
          )}
        </>
      )}
    ></Controller>
  );
};

export default FromDrop;
