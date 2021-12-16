import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/SignIn'
import Home from './components/Home'
import SignUp from './components/SignUp'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
)

export default App
