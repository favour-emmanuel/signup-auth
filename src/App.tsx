import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
