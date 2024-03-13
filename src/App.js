import React from "react";
import InputUser from "./inputuser";
import {BrouserRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import DisplayData from "./displaydata";

function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<InputUser/>}></Route>
              <Route path="/displaydata" element={<DisplayData/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App