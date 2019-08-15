import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PageviewIcon from '@material-ui/icons/Pageview';
import { pink } from '@material-ui/core/colors';
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import logo from "../../assets/img/tradEDlogo.png";
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  logo: {
    maxWidth: '5vw',
    maxHeight: '5vw',
    borderRadius: '25%'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#AF473C'
  },
  marginTop: {
    marginTop: '10vw'
  },
    toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#AF473C'
  },
  color: {
    backgroundColor: '#415160'
  }
}));

export default function Search({ q, handleInputChange, handleSearchFormSubmit }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="absolute" className={clsx(classes.appBar, classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.menuButton, classes.menuButtonHidden)}
          >
            <MenuIcon to="/dashboard" />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            tradED
          </Typography>
          {/* <IconButton color="inherit">
          <img className={classes.logo} src={logo} alt="logo" />
          </IconButton> */}
        </Toolbar>
      </AppBar>

    <Container className={classes.marginTop} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.color}>
        <PageviewIcon className={classes.color} />
      </Avatar>
        <Typography component="h1" variant="h5">
          Search
        </Typography>
        <form className={classes.form} noValidate>
          <Input
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="name"
            type="text"
            placeholder="Company Name Search"
            label="Company Name Search"
            name="q"
            value={q}
            onChange={handleInputChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSearchFormSubmit}
          >
            Search
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </React.Fragment>
  );
}