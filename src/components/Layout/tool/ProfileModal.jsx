import { Box, Modal, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ProfileImg } from "../../share";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PropTypes from "prop-types";

const TitleTypo = styled(Typography)`
  color: rgb(97, 97, 97);
  line-height: 30px;
  font-size: 14px;
`;

const ResultTypo = styled(Typography)`
  color: rgb(18, 18, 18);
  line-height: 35px;
  background-color: rgb(245, 245, 245);
  padding-left: 10px;
  margin-bottom: 10px;
`;

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  color: "rgb(18, 18, 18)",
};

ProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleProfile: PropTypes.func.isRequired,
  userdata: PropTypes.string.isRequired,
};

/**
 * @title 유저 프로필 모달
 */
function ProfileModal({ open, handleProfile, userdata }) {
  return (
    <Modal
      open={open}
      handleProfile={handleProfile}
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <Box sx={Modalstyle}>
        <CloseRoundedIcon
          style={{
            position: "absolute",
            top: "15px",
            fontSize: "25px",
            right: "15px",
            color: "rgb(18, 18, 18)",
            cursor: "pointer",
          }}
          onClick={handleProfile}
        />
        <ProfileImg
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            top: "-40px",
            left: "20px",
          }}
        />
        <TitleTypo sx={{ marginTop: "60px" }}>아이디</TitleTypo>
        <ResultTypo id="modal-desc">{userdata.username}</ResultTypo>
        <TitleTypo>성함</TitleTypo>
        <ResultTypo id="modal-desc">{userdata.name}</ResultTypo>
        <TitleTypo>권한</TitleTypo>
        <ResultTypo id="modal-desc">{userdata.role}</ResultTypo>
      </Box>
    </Modal>
  );
}

export default ProfileModal;
