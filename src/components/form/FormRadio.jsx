import { FormControl, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";

const RadioGroups = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

/**
 * @title 💥DefaultForm 과 사용해야하는 Mui Radio
 * @desc true : 공개 / false : 비공개
 */
export const FormRadio = ({ name, label, options, onChange, ...others }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={true}
      render={({ field }) => (
        <FormControl>
          <RadioGroups
            {...others}
            {...field}
            name={name}
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            // aria-labelledby={`aria-${name}-by`}
          >
            {options.map((item) => (
              <FormControlLabel
                key={item.value}
                label={item.label}
                value={item.value}
                control={<Radio />}
              />
            ))}
          </RadioGroups>
        </FormControl>
      )}
    />
  );
};
