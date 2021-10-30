import './App.scss'
import './Variables.scss'
import Home from '../src/Pages/Home/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from '../src/Pages/About/About';
import contact from '../src/Pages/Contact/Contact';



function App() {
  return (
    <>
    <div className="App">
      
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={contact} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
