// Components
import Home from './Home'
import Nav from './Nav'

// Login Components
import Login from './Login/Login'
import Register from './Login/Register'
import PrivateRoute from './Login/PrivateRoute'

// Create
import Create from './events/create/Create'
import New from './events/create/New'

// Read - Data Components
import Events from './events/read/Events'
import EventByID from './events/read/EventByID'

  // Sub Components
  import Task from './events/read/Task'
  import Purchase from './events/read/Purchase'
  import User from './events/read/User'

// Update
import Update from './events/update/Update'

// Delete
import Delete from './events/delete/Delete'

// Tools
// import Alerts from './utils/Alerts'

export { Home, Nav, 
  Login, Register, PrivateRoute, 
  Events, EventByID, 
  New, Create, Update, Delete, 
  Task, Purchase, User };