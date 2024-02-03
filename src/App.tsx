import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Form from "./components/Form";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/form" Component={Form} />
          <Route path="/expenseform" Component={ExpenseForm} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
