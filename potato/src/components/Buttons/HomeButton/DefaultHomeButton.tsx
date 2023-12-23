import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import PotatoIcon from '../../../assets/potato.svg';

function DefaultHomeButton({ handleClick }: { handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  const theme = useTheme();
  
  const buttonStyle = {
    variant: 'contained',
    color: "white",
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  };

  return (
    <Button sx={buttonStyle} onClick={handleClick}>
      <img src={PotatoIcon} className="logo react" alt="React logo" />
    </Button>
  );
}

export { DefaultHomeButton };