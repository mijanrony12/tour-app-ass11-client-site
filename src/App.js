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
import AuthPovider from './Context/AuthPovider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MyOrder from './Component/MyOrder/MyOrder';
import ManageAllOrder from './Component/ManageAllOrder/ManageAllOrder';
function App() {
  return (
    <div>
        <AuthPovider>
                <BrowserRouter>
                        <Header/>
                        <Switch>
                                <Route exact path="/">
                                        <Home></Home>
                                </Route>
                                <Route  path="/home">
                                        <Home></Home>
                                </Route>
                                <PrivateRoute path="/feedbacks">
                                        <Feedbacks></Feedbacks>
                                </PrivateRoute>
                                <PrivateRoute path="/placeOrder">
                                        <PlaceOrder></PlaceOrder>
                                </PrivateRoute>
                                <Route path="/AddPackage">
                                        <AddPackage></AddPackage>
                                </Route>
                                <Route path="/myOrder">
                                        <MyOrder></MyOrder>
                                </Route>
                                <Route path="/manageOrder">
                                        <ManageAllOrder></ManageAllOrder>
                                </Route>
                                <Route path="/login">
                                        <Login></Login>
                                </Route>
                        </Switch>
                        <Footer></Footer>
          </BrowserRouter>    
       </AuthPovider>
    </div>
  );
}

export default App;
