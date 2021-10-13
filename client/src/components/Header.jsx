import { AppBar, Button, Toolbar, Box, useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

export default function Header() {
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", alignContent: "space-between" }}>
          <Logo sx={{ flexGrow: 1 }} />
          {isLarge ? <Button variant="contained">Login</Button> : <MenuButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
