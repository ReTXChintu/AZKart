import { CSSReset, ChakraProvider, useToast } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { updateUser } from "./redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const serverUrl = process.env.REACT_APP_SERVER_URL;

function App() {
  const toast = useToast();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
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

      console.log(result.user);

      dispatch(updateUser(result.user));
    };

    if (token) {
      authenticateUser();
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <NavBar />
        <Home />
      </Router>
    </ChakraProvider>
  );
}

export default App;
