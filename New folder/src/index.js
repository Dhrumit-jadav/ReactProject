import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"

import Student from "./Student";
import Products from "./Products";
import Home from "./Home";
import Layout from "./Layout";
import Fac from "./Fac";
import FacDetails from "./FacDetails";
import FacAdd from "./FacAdd";
import FacEdit from "./FacEdit";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Fac" element={<Fac />}></Route>
        <Route path="/Fac/:id" element={<FacDetails />}></Route>
        <Route path="/Fac/add" element={<FacAdd />} />
        <Route path="/Fac/edit/:id" element={<FacEdit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);