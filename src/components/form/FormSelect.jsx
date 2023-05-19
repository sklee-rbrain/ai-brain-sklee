import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * @title 💥DefaultForm 과 사용해야하는 Select form
 *  @memo 💥react-hook-form 의존성 컴포넌트
 */
const FormSelect = ({ name, label, type, onChange, options, ...others }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          size="small"
          name={name}
          isOptionEqualToValue={(o, v) => {
            return o?.value === v?.value;
          }}
          value={field?.value ?? null}
          onChange={(e, value) => {
            field.onChange(value);
          }}
          options={options}
          renderInput={(params) => (
            <>
              <TextField {...params} error={!!error} label={label} />
              {error?.message && (
                <FormHelperText
                  error
                  sx={{ position: "absolute", bottom: "-20px" }}
                >
                  {error?.message}
                </FormHelperText>
              )}
            </>
          )}
          {...others}
        />
      )}
    ></Controller>
  );
};

export default FormSelect;
