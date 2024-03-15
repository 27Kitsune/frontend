import React from "react";
import InputUser from "./inputuser";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DisplayData from "./displaydata";
import UpdateData from "./UpdateData";

function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<InputUser/>}></Route>
              <Route path="/displaydata" element={<DisplayData/>}></Route>
              <Route path="/student/UpdateData/:student_id" element={<UpdateData/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App