import { CSSReset, ChakraProvider, useToast } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { updateUser } from "./redux/slices/userSlice";
import { updateCart } from "./redux/slices/cartSlice";
import { updateFavorites } from "./redux/slices/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Profile from "./components/Profile";
import AllProducts from "./components/AllProducts";
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

      dispatch(updateCart(result.user.cart));
      dispatch(updateFavorites(result.user.favorites));
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
          <Route path="/flash-deals" element={<AllProducts />} />
          <Route path="/discover-new" element={<AllProducts />} />
          <Route path="/1week-delivery" element={<AllProducts />} />
          <Route path="/hot-sales" element={<AllProducts />} />
          <Route path="/clearance-sale" element={<AllProducts />} />
          <Route path="/top-sellers" element={<AllProducts />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
