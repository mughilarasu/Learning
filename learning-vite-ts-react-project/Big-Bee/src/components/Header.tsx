import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShopIcon from '@mui/icons-material/Shop';
import Carosel1 from '../images/carosel 1.jpg';
import Carousel from './Carousel'
import { Avatar, Grid, Stack } from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const drawerWidth = 240;
const navItems = ['Feeds', 'Discover Artist', 'Login', 'Signup', 'Contact'];

type PropsType = {
  window?: () => Window;
}
function Header({ window }: PropsType) {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Perfomr
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}

        <IconButton aria-label="bookmark" size="small">
          <BookmarkIcon />
        </IconButton>
        <IconButton aria-label="cart" size="small">
          <ShopIcon />
        </IconButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "0px 0px 0px 0px",
    borderRadius: "4px",
    border: "1px solid #e1e1e1"
  }));
  const eventStyles = {
    icon: { fontSize: 64, color: 'black' }
  }

  const recommendedStyles = { img: { width: '100%', height: '100%', maxWidth: 500, maxHeight: 500 } }
  const events = [{ name: "Workshops", count: "145", icon: <CoPresentIcon sx={eventStyles.icon} /> },
  { name: "Courses", count: "73", icon: <LocalLibraryIcon sx={eventStyles.icon} /> },
  { name: "Theatre & Arts", count: "37", icon: <TheaterComedyIcon sx={eventStyles.icon} /> },
  { name: "Health & Wellness", count: "32", icon: <Diversity1Icon sx={eventStyles.icon} /> },
  { name: "Kids", count: "16", icon: <ChildCareIcon sx={eventStyles.icon} /> },
  { name: "Music", count: "9", icon: <LibraryMusicIcon sx={eventStyles.icon} /> },
  { name: "Talks", count: "8", icon: <InterpreterModeIcon sx={eventStyles.icon} /> }
  ]

  const recommended = [{ name: "Show 1", date: "25/03/2024 (Friday)", language: "Tamil", location: "Chennai", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Show 2", date: "25/03/2024 (Friday)", language: "English", location: "New York", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Show 3", date: "25/03/2024 (Friday)", language: "Telugu", location: "Hyderabad", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Show 4", date: "25/03/2024 (Friday)", language: "Kannada", location: "Bangalore", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Show 5", date: "25/03/2024 (Friday)", language: "Hindi", location: "Mumbai", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  ];
  const artists = [{ name: "Artist 1", date: "25/03/2024 (Friday)", language: "Tamil", location: "Chennai", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Artist 2", date: "25/03/2024 (Friday)", language: "English", location: "New York", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Artist 3", date: "25/03/2024 (Friday)", language: "Telugu", location: "Hyderabad", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Artist 4", date: "25/03/2024 (Friday)", language: "Kannada", location: "Bangalore", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Artist 5", date: "25/03/2024 (Friday)", language: "Hindi", location: "Mumbai", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  { name: "Artist 6", date: "25/03/2024 (Friday)", language: "Hindi", location: "Mumbai", icon: <img src={Carosel1} alt="img1" style={recommendedStyles.img} /> },
  ];
  return (
    <Box >
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: '#fff', color: "#000", boxShadow: 0, borderBottom: "1px solid #ccc" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Perfomr
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))}
            <IconButton aria-label="bookmark" size="small">
              <BookmarkIcon />
            </IconButton>
            <IconButton aria-label="cart" size="small">
              <ShopIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box>
        {/* <img src={Carosel1} alt="carosel 1" style={{ borderRadius: 0 }} /> */}
        <Carousel />
        <Box component="main"
          sx={{ p: 8 }}
        >
          <Box sx={{ p: "64px 16px" }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>RECOMMENDED</Typography>
                  <Button variant='outlined' size='small' sx={{ borderRadius: '50px' }} color="secondary">Show More</Button>
                </Stack>
              </Grid>
              {recommended.slice(0, 4).map((event, index) => (
                <Grid item xs={3} key={index}>
                  <Item>
                    <Box sx={{ background: '#000' }}>

                      {event.icon}
                      <Typography variant="body2" sx={{ color: '#fff' }}>{event.date}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '16px', p: 2 }}>{event.name} | {event.language}</Typography>
                    <span><LocationOnIcon /></span>
                    <Typography variant="body2" sx={{ fontSize: '14px', }}> {event.location}</Typography>
                  </Item>
                </Grid>
              ))}

            </Grid>
          </Box>

          <Box sx={{ p: "64px 16px" }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Artists</Typography>
                  <Button variant='outlined' size='small' sx={{ borderRadius: '50px' }} color="secondary">Show More</Button>
                </Stack>
              </Grid>
              {artists.slice(0, 6).map((event, index) => (
                <Grid item xs={2} key={index}>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                  }}>
                    <Avatar
                      // alt="Remy Sharp"
                      // src="/static/images/avatar/1.jpg"
                      sx={{ width: '100%', height: '150px', maxWidth: '150px' }}
                    >
                      <AccountCircleIcon
                        sx={{ width: '100%', height: '150px', maxWidth: '150px' }} />
                    </Avatar></Box>
                  <Typography variant="body2" sx={{ fontSize: '16px', p: 2, textAlign: 'center' }}>{event.name}</Typography>
                </Grid>
              ))}

            </Grid>
          </Box>
          <Box sx={{ p: "64px 16px" }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>BROWSE EVENTS BY GENRE</Typography>
                  <Button variant='outlined' size='small' sx={{ borderRadius: '50px' }} color="secondary">Show More</Button>
                </Stack>
              </Grid>
              {events.slice(0, 6).map((event, index) => (
                <Grid item xs={2} key={index}>
                  <Item>
                    {event.icon}
                    <Typography variant="body2">{event.name}</Typography>
                  </Item>
                </Grid>
              ))}

            </Grid>
          </Box>
          {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography> */}
        </Box></Box>
    </Box>
  );
}



export default Header;
