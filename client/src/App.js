import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import Navbar from './components/nav'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </div>
    </Router>
  )
}

export default App