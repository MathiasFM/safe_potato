import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

function DefaultHomeButton({ handleClick }: { handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  const theme = useTheme();
  
  const buttonStyle = {
    variant: 'contained',
    color: "white",
    backgroundColor: theme.palette.success.main,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  };

  return (
    <Button sx={buttonStyle} onClick={handleClick}> Potato </Button>
  );
}

export { DefaultHomeButton };