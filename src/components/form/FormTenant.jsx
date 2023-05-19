import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * @title 💥DefaultForm 과 사용해야하는 dropdown
 * @memo 💥로그인페이지 - 테넌트 선택 전용 컴포넌트
 */
const FormTenant = ({ name, label, options, onChange, ...others }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="label" size="small">
            {label}
          </InputLabel>
          <Select
            label={label}
            labelId="label"
            options={options}
            {...field}
            {...others}
            error={!!error}
            value={field?.value || ""}
            size="small"
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          >
            {options.map((item) => (
              <MenuItem key={item.value} value={item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {error?.message && (
            <FormHelperText
              error
              sx={{ position: "absolute", bottom: "-20px", left: "-15px" }}
            >
              {error?.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    ></Controller>
  );
};

export default FormTenant;
