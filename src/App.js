import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Homes/Home/Home';
import Footer from './Component/Footer/Footer';
import Feedbacks from './Component/Feedbacks/Feedbacks';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Login from './Component/Login/Login';
import AddPackage from './Component/AddPackage/AddPackage';
function App() {
  return (
    <div>
      <BrowserRouter>
            <Header/>
            <Switch>
                     <Route exact path="/">
                            <Home></Home>
                    </Route>
                     <Route  path="/home">
                            <Home></Home>
                    </Route>
                     <Route path="/feedbacks">
                            <Feedbacks></Feedbacks>
                    </Route>
                     <Route path="/placeOrder">
                            <PlaceOrder></PlaceOrder>
                    </Route>
                     <Route path="/AddPackage">
                            <AddPackage></AddPackage>
                    </Route>
                     <Route path="/login">
                            <Login></Login>
                    </Route>
           </Switch>
              <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
