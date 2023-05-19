import styled from "@emotion/styled";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { unSetUser } from "../../app/store/authSlice";
import { persistor } from "../../index";
import ProfileModal from "./tool/ProfileModal";
import { usercheckAPI } from "../../api/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { ProfileImg } from "../share";

const HeaderWrapper = styled(Box)`
  border: 1px solid ${(props) => props.theme.color.layoutline};
  box-shadow: 1px 1px 0.5px ${(props) => props.theme.color.lineShadow};
  background-color: rgb(255, 255, 255);
  min-height: 62px;
  border-top: none;
`;

const Stacks = styled(Stack)`
  padding: 3px;
  .MuiSvgIcon-root {
    margin-right: 10px;
    color: ${(props) => props.theme.color.fontColor};
    font-size: 22px;
  }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [userdata, setUserdata] = useState("");

  const dispatch = useDispatch();

  // 프로필 아이콘 클릭 여부 확인
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // 모달 닫힘 상태
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 모달창 띄우기, 유저 정보 불러오기
  const handleProfile = async () => {
    setOpenModal(true);
    setAnchorEl(null);

    try {
      const res = await usercheckAPI();
      const userdata = res.data.result;
      setUserdata(userdata);
    } catch (err) {
      console.log("유저 정보를 불러올 수 없습니다.", err);
    }
  };

  // 로그아웃
  const handleLogout = () => {
    persistor.purge();
    dispatch(unSetUser());
  };

  return (
    <HeaderWrapper>
      <Toolbar sx={{ float: "right" }}>
        <IconButton aria-label="account of current user" onClick={handleMenu}>
          <ProfileImg style={{ width: "30px", height: "30px" }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* 하위메뉴 */}
          <Stacks>
            <MenuItem onClick={handleProfile}>
              <PersonIcon />
              프로필
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogoutIcon />
              로그아웃
            </MenuItem>
          </Stacks>
        </Menu>
        <ProfileModal
          open={openModal}
          userdata={userdata}
          handleProfile={() => setOpenModal(false)}
        />
      </Toolbar>
    </HeaderWrapper>
  );
};

export default Header;
