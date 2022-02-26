import './App.scss'
import './Variables.scss'
import Home from '../src/Pages/Home/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from '../src/Pages/About/About';
import contact from '../src/Pages/Contact/Contact';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog'
import SingleBlog from './Components/Blog/SingleBlog';
import Todo from './Components/Todo';
import Pagination from './Components/Pagination';
import Form from './Components/Form'



function App() {

  const data = [
    { 
      id: 1, 
      icon: "fab fa-react", 
      title: "REACT Js DEVELOPMENT", 
      description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
        id: 2, 
        icon: "fab fa-react", 
        title: "Next Js DEVELOPMENT", 
        description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
        id: 3, 
        icon: "fab fa-wordpress", 
        title: "Wordpress", 
        description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
      id: 4, 
      icon: "fab fa-react", 
      title: "Woocommerce", 
      description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
      id: 5, 
      icon: "fab fa-react", 
      title: "Elementor", 
      description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    }
  ];




  return (
    <>
    
    <div className="App">
      {/* <Pagination/> */}
      <Form />
      <Router>

      <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={contact} />
          <Route exact path="/blog">
            <Blog data={data}/>
          </Route>
          <Route exact path="/blog/:title">
            <SingleBlog data={data}/>
          </Route>
        </Switch>
      </Router>
      {/* <Todo/> */}
    </div>
    </>
  );
}

export default App;
