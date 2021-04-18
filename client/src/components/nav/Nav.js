import { useState} from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../components/images/sbLogo.png'
import './nav.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 590,
  }, 

}));

const Navbar = () => {

  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  // const dispatch = useDispatch
  // const history = useHistory()
  // const location = useLocation()

  const logout = () => {
    // dispatch({type: 'LOGOUT' })
  }
  // history.push('/')

  // setUser(null)

  // useEffect(() => {
    // const token = user?.token
  
    // setUser(JSON.parse(localStorage.getItem('profile')))
  // }, [location])


  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>
            <Link to='/'>
            <img src={Logo} alt="logo" className="logo" />
            </Link>
          </Typography>
          {user ? (
            <div>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button variant="contained" color="secondary" onClick={logout}>Log out</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar