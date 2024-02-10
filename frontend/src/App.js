import { CSSReset, ChakraProvider, useToast } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { updateUser } from "./redux/slices/userSlice";
import { setCart } from "./redux/slices/cartSlice";
import { setFavorites } from "./redux/slices/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Profile from "./components/Profile";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
const serverUrl = process.env.REACT_APP_SERVER_URL;

function App() {
  const toast = useToast();
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();
  useEffect(() => {
    const authenticateUser = async () => {
      const response = await fetch(`${serverUrl}/authenticate`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Authentication failed",
          description: result.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      dispatch(
        updateUser({
          name: result.user.name,
          email: result.user.email,
          photo: result.user.photo,
        })
      );

      dispatch(setCart(result.user.cart));
      dispatch(setFavorites(result.user.favorites));
    };

    if (token) {
      authenticateUser();
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/orders" element={<Favorites />} />
          <Route exact path="/settings" element={<Favorites />} />
          <Route exact path="/help" element={<Favorites />} />
          <Route
            exact
            path="/flash-deals"
            element={
              <AllProducts title={"Fla⚡️h Deals"} saleName={"Flash Deal"} />
            }
          />
          <Route
            exact
            path="/discover-new"
            element={<AllProducts title={"Discover New"} saleName={"New"} />}
          />
          <Route
            exact
            path="/hot-sales"
            element={<AllProducts title={"H🔥t Sales"} saleName={"Hot Sale"} />}
          />
          <Route
            exact
            path="/clearance-sale"
            element={
              <AllProducts
                title={"Clearance Sale"}
                saleName={"Clearance Sale"}
              />
            }
          />
          <Route
            exact
            path="/top-sellers"
            element={
              <AllProducts title={"Top Sellers"} saleName={"Top Seller"} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
