import { useState } from "react";
import useAlert from "../../hook/useAlert";
import { Button, Card, Container, Stack, TextField, Typography } from "@mui/material";


function MemberLoginPage() {
  const alert = useAlert();

  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const handleMock = () => {
    if (username.length > 0 && password === 'test') {
      alert.setSeverity('success');
      alert.setMessage('Mocked!');
    } else if (username.length <= 0 ) {
      alert.setSeverity('error');
      alert.setMessage('Username is empty');
    } else if (password !== 'test') {
      alert.setSeverity('error');
      alert.setMessage('Password is wrong');
    } else {
      alert.setSeverity('error');
      alert.setMessage('Unknown error');
    }
    alert.setIsOpen(true);
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
                <TextField label="Username" onChange={v => setUsername(v.target.value)} />
                <TextField label="Password" onChange={v => setPassword(v.target.value)} />
                <Button onClick={handleMock} variant="outlined" color="info">Login</Button>
            </Stack>
        </Card>
    </Container>
  )
}

export { MemberLoginPage };