import BackgroundURL from "./assets/page_bg_raw.jpg";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import "./App.less";

const App = () => {
  return (
    <>
      <img className="pwse-background" alt="background" src={BackgroundURL} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
