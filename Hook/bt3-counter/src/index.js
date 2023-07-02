import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Counter
            btnName="Add 1"
            addAmount={1}
        />
        <Counter
            btnName="Add 2"
            addAmount={2}
        />
    </>
);
