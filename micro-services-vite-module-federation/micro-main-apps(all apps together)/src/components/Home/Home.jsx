import * as React from "react";
import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { screens } from "../../../Utils";
import { useNavigate } from "react-router-dom";
import SearchContext from "../../context/SearchContext/SearchContext";
import useScreenTheme from "../../context/ThemeContext/ThemeContext";
function Home() {
  const navigate = useNavigate();
  const { search } = React.useContext(SearchContext);

  const newScreen = screens.filter((screen) =>
    screen.name.toLowerCase().includes(search.toLowerCase())
  );
  const screenTheme = useScreenTheme();
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <Box sx={{ flexGrow: 1, p: 2 }}>
        {newScreen.length > 0 ? (
          <Grid
            container
            spacing={2}
            sx={{
              "--Grid-borderWidth": "1px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "divider",
              },
            }}
            component={Paper}
          >
            {newScreen.map((screen) => {
              return (
                <Grid key={screen.url} item xs={newScreen.length >= 2 ? 6 : 12}>
                  <Box
                    minHeight={160}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      "&:hover": {
                        border: "1px solid",
                        cursor: "pointer",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
                      },
                    }}
                    onClick={() => navigate(screen.url)}
                  >
                    <Typography variant="h5">{screen.name}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography
            style={{
              textAlign: "center",
            }}
            variant="h3"
          >
            No Apps Found
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default Home;
