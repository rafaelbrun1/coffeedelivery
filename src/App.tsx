import { BrowserRouter } from "react-router-dom";
import { CarContextProvider } from "./context/CarContext";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <CarContextProvider>
        <Router />
      </CarContextProvider>
    </BrowserRouter>
  );
}

export default App;
