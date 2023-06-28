import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "Minh Thang";

root.render(
    React.createElement(
        "h1",
        {
            style: {
                textAlign: "center",
            },
        },
        name
    )
);
