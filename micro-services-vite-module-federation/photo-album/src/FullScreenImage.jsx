import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
{
  /* <FullScreenImage
  handleClickOpen={handleClickOpen}
  handleClose={handleClose}
  setOpen={setOpen}
  open={open}
/>; */
}
export default function FullScreenImage() {
  const params = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${params.imgId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("err", err);
        navigate(`/Not-Found`);
      });
  }, [params.imgId]);
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {data.title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <img
          src={data.url}
          alt={data.title}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Dialog>
    </React.Fragment>
  );
}
