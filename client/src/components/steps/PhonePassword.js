import { Autocomplete, Button, FormControl, FormHelperText, InputLabel, TextField, Typography } from "@mui/material";
import countries from "../../countries";
import React, { useContext, useState } from "react";
import MainContext from "../../MainContext";

export default function PhonePassword() {
  const { handleContinue, signupState, setSignupState } = useContext(MainContext);

  const [errors, updateErrors] = useState({});
  function validateAndContinue() {
    let valid = true;

    if (!signupState.password) {
      valid = false;
      setError({ password: "Please enter the password of your choice" });
    }

    if (!signupState.phone) {
      valid = false;
      setError({ phone: "Please enter your phone number" });
    }

    if (valid) {
      handleContinue();
    }
  }

  function setError(error) {
    updateErrors((errors) => ({ ...errors, ...error }));
  }

  function handleInputChange(key) {
    return function (e) {
      setError({ [key]: undefined });
      setSignupState({ [key]: e.target.value.trim() });
    };
  }
  return (
    <>
      <Typography>Enter your password</Typography>
      <TextField
        fullWidth
        onChange={handleInputChange("password")}
        error={Boolean(errors.password)}
        helperText={errors.password}
        type="password"
        id="password"
        name="password"
        label="Password"
        variant="standard"
      />
      <TextField
        fullWidth
        onChange={handleInputChange("phone")}
        error={Boolean(errors.phone)}
        helperText={errors.phone}
        id="phone"
        name="phone"
        label="Phone"
        placeholder="+1(XXX)XXX-XXXX"
        variant="standard"
      />
      <Button fullWidth variant="contained" sx={{ height: "60px", mt: 5 }} onClick={validateAndContinue}>
        Sign Up
      </Button>
    </>
  );
}
