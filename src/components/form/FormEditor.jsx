import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";

const Boxs = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  color: `${(props) => props.theme.color.fontColor}`,

  "& .ql-container.ql-snow": {
    ...theme.typography.body2,
  },
}));

/**
 * @title 텍스트 에디터 (React Qill)
 */
const Editor = ({ onChange }) => {
  const handleChange = (data) => {
    if (data === "<p><br></p>") onChange("");
    else onChange(data);
  };

  // quill에서 사용할 모듈을 설정하는 코드
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
        ],
      },
    };
  }, []);

  return (
    <Boxs>
      <ReactQuill
        style={{
          width: "100%",
          height: "300px",
        }}
        theme="snow"
        onChange={handleChange}
        modules={modules}
      />
    </Boxs>
  );
};

/**
 * @title 💥DefaultForm 과 사용해야하는 텍스트 에디터 (React Qill)
 */
const FormEditor = ({ name, onChange, ...others }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Editor
          name={name}
          onChange={field.onChange}
          value={field.value ? field.value : ""}
          error={!!error}
          {...others}
        />
      )}
    ></Controller>
  );
};

export default FormEditor;
