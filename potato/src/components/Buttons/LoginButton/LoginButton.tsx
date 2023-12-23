import { Menu, MenuItem } from "@mui/material";
import { DefaultLoginButton } from "./DefaultLoginButton";
import useHandleClick from "../../../hook/useHandleClick";

function LoginButton() {
  const { navigate, anchorEl, setAnchorEl, handleClick } = useHandleClick();

  const handleGuest = () => {
    console.log("Guest");
    setAnchorEl(null);
    navigate("/guest");
  };

  const handleMember = () => {
    console.log("Member");
    setAnchorEl(null);
    navigate("/mock");
  }


  return (
    <div>
      <DefaultLoginButton handleClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => { setAnchorEl(null) }}
      >
        <MenuItem onClick={handleGuest}>Guest</MenuItem>
        <MenuItem onClick={handleMember}>Member</MenuItem>
      </Menu>
    </div>
  );
}

export { LoginButton };