import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Homes/Home/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
            <Header/>
            <Switch>
                     <Route path="/home">
                            <Home></Home>
                    </Route>
           </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
