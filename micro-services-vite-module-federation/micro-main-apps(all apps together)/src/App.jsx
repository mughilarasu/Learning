import * as React from "react";
import { Box } from "@mui/material";

function App({ component }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        pt: 2,
      }}
    >
      {component}
    </Box>
  );
}

export default App;
