import React, { useEffect } from "react";
import { Button, Container, Box } from "@mui/material";
import Header from "./components/Header";

export default function App() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ my: 2, mt: 10 }}>
          {[...new Array(120)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
        </Box>
      </Container>
    </>
  );
}
