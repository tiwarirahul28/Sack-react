import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Bag from "./pages/Bag"
import School from "./pages/School"
import Travel from "./pages/Travel"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Gym from "./pages/Gym";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/bag" exact>
            <Bag/>
          </Route>
          <Route path="/school" exact>
            <School/>
          </Route>
          <Route path="/travel" exact>
            <Travel/>
          </Route>
          <Route path="/gym" exact>
            <Gym/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
