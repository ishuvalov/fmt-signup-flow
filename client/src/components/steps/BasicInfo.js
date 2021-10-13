import {Autocomplete, Box, Button, Checkbox, TextField, Link, Typography, FormHelperText} from "@mui/material";
import countries from "../../countries";
import React, { useContext, useState } from "react";
import MainContext from "../../MainContext";
import { useTheme } from "@mui/material/styles";

export default function BasicInfo() {
  const { handleContinue, signupState, setSignupState } = useContext(MainContext);
  const {
    palette: {
      primary: { main: mainColor },
      error: { main: errorColor },
    },
  } = useTheme();

  const [errors, updateErrors] = useState({});
  function validateAndContinue() {
    let valid = true;

    if (!signupState.firstName) {
      valid = false;
      setError({ firstName: "Please enter your first name" });
    }

    if (!signupState.lastName) {
      valid = false;
      setError({ lastName: "Please enter your last name" });
    }

    if (!signupState.email) {
      valid = false;
      setError({ email: "Please enter valid email address" });
    }

    if (!countries.some((country) => country.code === signupState.country)) {
      valid = false;
      setError({ country: "Please enter valid country name" });
    }

    if (!signupState.agreed) {
      valid = false;
      setError({ agreed: "Please mark the checkbox above to proceed" });
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

  function handleCountryChange(e, values) {
    setError({ country: undefined });
    setSignupState({ country: values?.code || undefined });
  }

  function handleTermsChange(e) {
    setError({ agreed: undefined });
    setSignupState({ agreed: e.target.checked });
  }

  function getCountryName(code) {
    return countries.find((country) => country.code === signupState.country)?.label;
  }

  return (
    <>
      <Typography>Become a farmland investor</Typography>
      <TextField
        fullWidth
        onChange={handleInputChange("firstName")}
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
        id="firstName"
        label="First Name"
        name="firstName"
        variant="standard"
        value={signupState.firstName}
      />
      <TextField
        fullWidth
        error={Boolean(errors.lastName)}
        helperText={errors.lastName}
        onChange={handleInputChange("lastName")}
        id="lastName"
        name="lastName"
        label="Last Name"
        variant="standard"
        value={signupState.lastName}
      />
      <TextField
        fullWidth
        error={Boolean(errors.email)}
        helperText={errors.email}
        onChange={handleInputChange("email")}
        id="email"
        name="email"
        type="email"
        label="Email"
        variant="standard"
        value={signupState.email}
      />
      <Autocomplete
        fullWidth
        id="country"
        options={countries}
        autoHighlight
        onChange={handleCountryChange}
        value={getCountryName(signupState.country)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            error={Boolean(errors.country)}
            helperText={errors.country}
            label="Country"
            value={() => countries.find((country) => country.code === signupState.country)?.label}
          />
        )}
      />
      <Box
        fullWidth
        sx={{ display: "flex", alignItems: "flex-start", mt: "30px", borderLeft: `2px solid ${errors.agreed ? errorColor: mainColor}` }}
      >
        <Checkbox
          sx={{ mt: "-11px" }}
          checked={signupState.agreed}
          onChange={handleTermsChange}
        />
        <p style={{ margin: 0 }}>
          I agree to the <Link href="#">terms of service</Link>, <Link href="#">privacy policy</Link>,{" "}
          <Link href="#">electronic communications disclosure</Link>, and{" "}
          <Link href="#">electronic funds transfer disclosure</Link>
        </p>
      </Box>
      {errors.agreed && <FormHelperText error >{errors.agreed}</FormHelperText>}
      <Button fullWidth variant="contained" sx={{ height: "60px", mt: "28px" }} onClick={validateAndContinue}>
        Continue
      </Button>
    </>
  );
}
