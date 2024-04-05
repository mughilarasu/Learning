import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" textAlign={"center"}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mughilarasu.github.io/my-portfolio/"
        target="_blank"
      >
        Mughilarasu Muthuvel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <Divider />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Copyright />
      </Box>
    </>
  );
}
