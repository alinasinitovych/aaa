// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";

import NoPage from "../pages/NoPage";
import Clothes from '../pages/Clothes';
function ClothesNavbar() {
  return (
    <>
      {
          <BrowserRouter   >
            <Routes className="me-auto">
              <Route path="/" element={<Layout />}>
                <Route path="clothes" element={<Clothes />} />

                
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
      
      }
    </>
  );
}

export default ClothesNavbar;