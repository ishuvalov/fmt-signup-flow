import {Autocomplete, Box, Button, Checkbox, TextField, Link, Typography} from "@mui/material";
import countries from "../../countries";
import React, { useContext } from "react";
import MainContext from "../../MainContext";
import { useTheme } from "@mui/material/styles";

export default function BasicInfo() {
  const { handleContinue } = useContext(MainContext);
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  return (
    <>
      <Typography>Become a farmland investor</Typography>
      <TextField fullWidth id="firstName" label="First Name" name="firstName" variant="standard" />
      <TextField fullWidth id="lastName" name="lastName" label="Last Name" variant="standard" />
      <TextField fullWidth id="email" name="email" type="email" label="Email" variant="standard" />
      <Autocomplete
        fullWidth
        id="country"
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} variant="standard" label="Country" />}
      />
      <Box fullWidth sx={{ display: "flex", alignItems: "flex-start" }}>
        <Checkbox sx={{ mt: "4px" }} />
        <p>
          I agree to the <Link href="#">terms of service</Link>, <Link href="#">privacy policy</Link>,{" "}
          <Link href="#">electronic communications disclosure</Link>, and{" "}
          <Link href="#">electronic funds transfer disclosure</Link>
        </p>
      </Box>
      <Button
        fullWidth
        variant="contained"
        sx={{ height: "60px", mt: '13px' }}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </>
  );
}
