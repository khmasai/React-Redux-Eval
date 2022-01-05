
import './App.css';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import PrimarySearchAppBar from './Components/Search/Search';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<PrimarySearchAppBar />}></Route>
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
