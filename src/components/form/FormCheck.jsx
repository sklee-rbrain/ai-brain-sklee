import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

/**
 * @title 💥DefaultForm 과 사용해야하는 mui checkbox 한 개
 * @memo 💥react-hook-form 의존성 컴포넌트
 * @desc true : 고정 / false : 고정아님
 */
const FormCheck = ({ name, label, onChange, ...others }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={false}
      render={({ field }) => (
        <FormControlLabel
          name={name}
          label={label}
          control={
            <Checkbox
              {...field}
              {...others}
              checked={field.value}
              onChange={() => {
                field.onChange(!field.value);
              }}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          }
        />
      )}
    />
  );
};
export default FormCheck;
