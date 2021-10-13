import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

export default function BackButton(props) {
  const {
    palette: {
      background: { paper: paperColor },
    },
  } = useTheme();

  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        position: "absolute",
        backgroundColor: paperColor,
        backgroundImage:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEuNDFMMi44MyAxMEwxMCAxOC41OUw4LjU5IDIwTDAgMTBMOC41OSAwTDEwIDEuNDFaIiBmaWxsPSIjODc4Nzk3Ii8+Cjwvc3ZnPgo=)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
      }}
      {...props}
    />
  );
}
