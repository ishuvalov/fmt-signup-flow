import React, { useReducer, useState } from "react";
import { Container, FormHelperText, Paper, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import BasicInfo from "./components/steps/BasicInfo";
import PhonePassword from "./components/steps/PhonePassword";
import Success from "./components/steps/Success";
import BackButton from "./components/BackButton";
import Theme from "./Theme";
import MainContext from "./MainContext";

const steps = [<BasicInfo />, <PhonePassword />];

export default function App() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState();
  const [currentStep, setCurrentStep] = useState(0);
  const [signupState, setSignupState] = useReducer(
    (current, update) => ({ ...current, ...update }),
    {}
  );

  function handleContinue() {
    console.log("continue!");
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    } else {
      submit();
    }
  }

  function handleBack() {
    console.log("back!");
    setCurrentStep((step) => (step > 0 ? step - 1 : 0));
  }

  function submit() {
    console.log("signupState: ", signupState);
    console.log("submit!");
    fetch("/api/register", {
      method: "post",
      body: JSON.stringify(signupState),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => setSubmitError(err.toString()));
  }

  return (
    <ThemeProvider theme={Theme}>
      <MainContext.Provider
        value={{ handleContinue, signupState, setSignupState }}
      >
        <Header />
        <Container sx={{ display: "flex", justifyContent: "center", my: 15 }}>
          <Paper
            sx={{
              width: 570,
              minHeight: 360,
              py: "35px",
              px: "55px",
              boxSizing: "border-box",
              position: "relative"
            }}
          >
            {isSubmitted ? (
              <Success />
            ) : (
              <>
                {currentStep > 0 && (
                  <BackButton
                    style={{ left: -70, top: 0 }}
                    onClick={handleBack}
                  />
                )}
                {steps[currentStep]}
              </>
            )}
            {submitError && (
              <FormHelperText error>{submitError}</FormHelperText>
            )}
          </Paper>
        </Container>
      </MainContext.Provider>
    </ThemeProvider>
  );
}
