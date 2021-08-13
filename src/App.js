import { createContext, useState, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";
import { getDecodedUser } from "./components/LogIn/LogIn/LoginManager";
import Preloader from "./components/Shared/Preloader/Preloader";
import RegisterForm from "./components/Home/Registration/RegisterForm";
import Footer from "./components/Home/Footer/Footer";
import NavB from "./components/Shared/Navbar/NavB";
import AdminLayout from "./layouts/Admin";
import ReactPdf from "./components/Home/Registration/ReactPdf";
import Drawer from "./components/Dashboard/Drawer/Drawer";
const NoMatch = lazy(() => import("./components/NoMatch"));
const Home = lazy(() => import("./components/Home/Home/Home"));
const LoginModal = lazy(() => import("./components/LogIn/LogIn/LoginModal"));
const Dashboard = lazy(() =>
  import("./components/Dashboard/Dashboard/Dashboard")
);

export const UserContext = createContext();
const App = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        selectedService,
        setSelectedService,
      }}
    >
      {/* <Router> */}
      <Toaster />
      <Suspense fallback={<Preloader />}>
        <Switch>
          {/* <Route path="/dashboard">
              <NavB />
              <Dashboard />
              <Footer />
            </Route> */}
          <Route path="/dashboard" component={AdminLayout} />
          <Route path="/login">
            <LoginModal />
          </Route>
          <Route exact path="/pdf">
            <ReactPdf />
          </Route>
          {/* <PDFViewer>
        <ReactPdf />
      </PDFViewer> */}
          <Route exact path="/covid-vaccine/regi_form">
            <NavB />
            <RegisterForm />
            <Footer />
          </Route>
          <Route exact path="/covid-vaccine/">
            <Home />
          </Route>
          <Route exact path="*">
            <Home />
          </Route>
        </Switch>
      </Suspense>
      {/* </Router> */}
    </UserContext.Provider>
  );
};

export default App;
