import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Header from "./components/Header";

const App = () => {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
