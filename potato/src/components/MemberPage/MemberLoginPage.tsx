import { useState } from "react";
import useAlert from "../../hook/useAlert";
import { Button, Card, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import MemberRegisterPage from "./MemberRegisterPage";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";

interface MemberLoginPageProps {
  readonly alert: ReturnType<typeof useAlert>;
}

function MemberLoginPage( props: MemberLoginPageProps ) {


  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMock = () => {
    if (username.length > 0 && password === 'test') {
      props.alert.setSeverity('success');
      props.alert.setMessage('Mocked!');
    } else if (username.length <= 0 ) {
      props.alert.setSeverity('error');
      props.alert.setMessage('Username is empty');
    } else if (password !== 'test') {
      props.alert.setSeverity('error');
      props.alert.setMessage('Password is wrong');
    } else {
      props.alert.setSeverity('error');
      props.alert.setMessage('Unknown error');
    }
    props.alert.setIsOpen(true);
  }

  const [showRegister, setShowRegister] = useState<boolean>(false);

  const handleRegister = () => {
    setShowRegister(!showRegister);
  }

  return (
    <Container maxWidth="sm">
        <Card sx={{ 
            color: 'text.secondary',
            bgcolor: 'background.paper',
            boxShadow: 20,
            p: 2,
            }}>
            <Stack flexDirection={"column"} gap={2}>
                <Typography variant="h6">Sign In</Typography>
                <FormControl variant="outlined">
                  <InputLabel>Username</InputLabel>
                  <OutlinedInput
                    type="username"
                    label="Username"
                    onChange={v => setUsername(v.target.value)}
                  />
                </FormControl>
                <FormControl variant="outlined">
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
                <Button onClick={handleMock} variant="outlined" color="info">Login</Button>
                <Button size="small" color="info">Forgot password?</Button>
                <Button onClick={handleRegister} variant="contained" color="info">Register</Button>
                <MemberRegisterPage open={showRegister} handleClose={handleRegister} alert={props.alert}/>
            </Stack>
        </Card>
    </Container>
  )
}

export { MemberLoginPage };