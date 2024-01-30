import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import InputLayout from "./layout/InputLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
