import React, { useEffect } from "react";
import { Button } from "@mui/material";

export default function App() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div>Hello there!!!</div>
      <Button variant="contained">Click me!</Button>
    </>
  );
}
