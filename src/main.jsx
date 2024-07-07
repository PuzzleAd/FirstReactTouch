import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
// import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
