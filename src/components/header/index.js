import { useState } from 'react';
import { 
    AppBar, Box, Toolbar, IconButton, Typography, 
    Menu, Container, Button, Tooltip, MenuItem
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import PersonIcon from '@mui/icons-material/Person';

import { useRouter } from 'next/router'

const pages = [];

const Header = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const router = useRouter()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static" sx={{ height:'10vh', backgroundColor: '#061A23' }}>
      <Container maxWidth="xl" sx={{ height:'100%' }}>
        <Toolbar disableGutters sx={{ height:'100%' }}>
          <figure 
            style={{ width: 'auto', height: '50px', zIndex: 100, margin: 'auto 0', cursor: 'pointer' }}
            title='home'
            onClick={()=>router.push('/')}
          >
            <img
              src='/images/amarine_logo.webp'
              alt='logo'
              style={{ width: '100%', height: '100%' }}
            />
          </figure>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
                sx={{ 
                  p: 1, 
                  color: 'white',
                  fontSize: '40px',
                  borderRadius: '100%',
                  backgroundColor: 'grey !important'
                }}
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;