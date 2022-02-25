import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import AddMedicine from "./components/AddMedicine/AddMedicine";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addForm" exact element={<AddForm />} />
          <Route path="/addMedicine" exact element={<AddMedicine />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
