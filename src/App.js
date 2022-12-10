import './App.css';
import Dashboard from './pages/Dashboard';
import Home from "./view/Home";
import Menu from "./view/Menu";
import Login from "./pages/Login";
import Navigation from "./component/NavigationBar";
import Register from "./pages/Register";
import Edit from "./view/Edit";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      
    <Navigation />
    <BrowserRouter>
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/dashboard" component={Dashboard} exact/>
        <Route path="/menu" component={Menu} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/edit/:id" component={Edit} exact/>
      </Switch>
    </main>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
