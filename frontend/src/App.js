import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
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