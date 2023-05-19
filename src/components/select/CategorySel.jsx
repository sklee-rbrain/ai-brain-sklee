import { Box, Modal } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  color: "rgb(18, 18, 18)",
};

/**
 * @title 게시글 - 카테고리 선택 컴포넌트
 */
const CategorySel = ({ name, open, handleClose }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Modal open={open} onClose={handleClose}>
          <Box sx={Modalstyle}></Box>
        </Modal>
      )}
    />
  );
};

export default CategorySel;
