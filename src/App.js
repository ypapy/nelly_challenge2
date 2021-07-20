import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Router>
      <div className="App">
         <SearchForm />
         <Switch>
           <Route path="/:id">
             <CardContainer />
           </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
