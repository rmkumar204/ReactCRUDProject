
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';
import {BrowserRouter, Route,Switch} from  'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        React js Tutorial
      </h3>
    <Navigation/>
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/Department' component={Department}></Route>
      <Route path='/Employee' component={Employee}></Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
