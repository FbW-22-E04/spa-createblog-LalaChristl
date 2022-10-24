import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import ShowCurrentPost from "./components/ShowCurrentPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/show-post" element={<ShowCurrentPost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
