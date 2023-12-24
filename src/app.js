import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";

const heading = React.createElement("h1" , {id:"elem"} , "Namaste React Interview");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
