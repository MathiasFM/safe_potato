import { Box, AppBar, Toolbar, Stack } from "@mui/material";
import { LoginButton } from "../Buttons/LoginButton/LoginButton";
import { HomeButton } from "../Buttons/HomeButton/HomeButton";

function Header() {
    return (
        <Stack direction={"row"} alignItems={"center"} width={"100%"}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Box sx={{ flexGrow: 0 }} />
                        <HomeButton />
                        <Box sx={{ flexGrow: 1 }} />
                        <LoginButton />
                    </Toolbar>
                </AppBar>
            </Box>
        </Stack>
    );
}

export { Header };