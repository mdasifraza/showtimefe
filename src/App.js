import './App.css';
import Navbar from './components/Navbar'
import Login from './Signup/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './Upcomming/index'
import Body from './components/Body'
import Booking from './contents/Booking'
import AddCityTheater from './admin/AddCityTheater'
// import Welcome from './Welcome/index'


function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route exact path="/" component={Welcome}/> */}
          {/* <Route exact path="/" component={Body} /> */}
          <Route exact path="/" component={Navbar} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upcomming" component={Cards} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/admin" component={AddCityTheater} />
        </Switch>
        {/* <Body /> */}

        {/* <Login /> */}






      </>
    </Router>
  );
}

export default App;
