import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./core/context/GlobalContext";
import "./core/styles/global.css";
import { AppProvider } from "./core/context/RouteContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AppProvider />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
