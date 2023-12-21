import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useHandleClick() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.currentTarget.blur();
  };

  return { navigate, anchorEl, setAnchorEl, handleClick };
}

export default useHandleClick;