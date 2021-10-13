import {Autocomplete, Button, FormControl, FormHelperText, InputLabel, TextField, Typography} from "@mui/material";
import countries from "../../countries";
import React, { useContext } from "react";
import MainContext from "../../MainContext";

export default function PhonePassword() {
  const { handleContinue } = useContext(MainContext);

  return (
    <>
      <Typography>Enter your password</Typography>
      <TextField fullWidth type="password" id="password" name="password" label="Password" variant="standard" />
      <TextField fullWidth id="phone" name="phone" label="Phone" placeholder="+1(XXX)XXX-XXXX" variant="standard" />
      <Button
        fullWidth
        variant="contained"
        sx={{ height: "60px", mt: 5 }}
        onClick={handleContinue}
      >
        Sign Up
      </Button>
    </>
  );
}
