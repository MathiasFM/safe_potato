import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

function DefaultLoginButton({ handleClick }: { handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  const theme = useTheme();
  
  const buttonStyle = {
    variant: 'contained',
    color: "white",
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  };

  return (
    <Button sx={buttonStyle} onClick={handleClick}> Log In </Button>
  );
}

export { DefaultLoginButton };