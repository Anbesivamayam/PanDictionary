import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="w-full h-full ">
      {/* {github homepage for package json} */}
      {/* "homepage": "https://anbesivamayam.github.io/PanDictionary", */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
