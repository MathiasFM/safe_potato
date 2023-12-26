import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import useAlert from '../../hook/useAlert';
import { useNavigate } from 'react-router-dom';


interface RegisterLoginPageProps {
    readonly alert: ReturnType<typeof useAlert>;
    readonly open: boolean;
    readonly handleClose: () => void;
}

export default function FormDialog(props: RegisterLoginPageProps) {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState<String>('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  const [password, setPassword] = React.useState<String>('');
  const [confirmPassword, setConfirmPassword] = React.useState<String>('');
  const [email, setEmail] = React.useState<String>('');

  const handleRegister = () => {
    if (username.length > 0 && password === confirmPassword && password.length > 0 && email.length > 0) {
      props.alert.setSeverity('success');
      props.alert.setMessage('Registered!');
      console.log('Registered!');
      navigate('/');
    } else {
      if (username.length <= 0) {
        props.alert.setSeverity('error');
        props.alert.setMessage('Username is empty');
      } else if (password !== confirmPassword) {
        props.alert.setSeverity('error');
        props.alert.setMessage('Password does not match');
      } else if (password.length <= 0) {
        props.alert.setSeverity('error');
        props.alert.setMessage('Password is empty');
      } else if (email.length <= 0) {
        props.alert.setSeverity('error');
        props.alert.setMessage('Email is empty');
      } else {
        props.alert.setSeverity('error');
        props.alert.setMessage('Unknown error');
      }
    }
    props.alert.setIsOpen(true);
  }

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.handleClose} PaperProps={{ style: { width: '300px' } }} >
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your information to register for an account.
          </DialogContentText>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel>Username</InputLabel>
            <OutlinedInput
              type="username"
              label="Username"
              onChange={v => setUsername(v.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={v => setPassword(v.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
              onChange={v => setConfirmPassword(v.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel>Email</InputLabel>
            <OutlinedInput
              label="Email"
              onChange={v => setEmail(v.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleRegister}>Register</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}