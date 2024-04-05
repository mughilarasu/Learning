import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function App() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        const newData = { ...res };
        newData.data[0].featured = true;
        newData.data[10].featured = true;
        setData(newData.data.slice(0, 26));
      })
      .catch((err) => console.error("err", err));
  }, []);
  return (
    <ImageList
      sx={{
        width: 500,
        height: 600,
        margin: "0px auto",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}
    >
      {data.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.id} cols={cols} rows={rows}>
            <img
              {...srcset(item.url, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                  onClick={() => navigate(`/photo_album/${item.id}`)}
                >
                  <RemoveRedEye />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
