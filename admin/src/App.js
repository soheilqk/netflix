import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="App">
        {user && <Topbar />}
        <div className="container">
          {user && <Sidebar />}
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
            {user && (
              <>
                <Route exact path="/users" element={<UserList />} />
                <Route exact path="/users/new" element={<NewUser />} />
                <Route exact path="/users/:userId" element={<User />} />
                <Route exact path="/movies" element={<ProductList />} />
                <Route exact path="/movies/new" element={<NewProduct />} />
                <Route exact path="/movies/:userId" element={<Product />} />
              </>
            )}
            <Route
              exact
              path="*"
              element={
                user ? (
                  <Navigate replace to="/" />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
