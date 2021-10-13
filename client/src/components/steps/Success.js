import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Success() {
  return (
    <Typography variant="h5" align="center">
      <Box fullWidth>Success</Box>
      <Button sx={{ mt: 7 }} variant="contained" onClick={() => window.location.reload()}>
        Start Again
      </Button>
    </Typography>
  );
}
