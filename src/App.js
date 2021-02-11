import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PhotoGrid from "./Components/PhotoGrid";
import Parallax from "./Components/Parallax";
import Stars from "./img/stars.jpg";
import Street from "./img/street.jpg";
import Tabs from "./Components/Tabs";
import Forms from "./Components/Forms";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Parallax pic={Stars} />
      <Tabs />
      <Parallax pic={Street} />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
