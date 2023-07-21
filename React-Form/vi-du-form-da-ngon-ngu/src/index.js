import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormHandling from "./modules/formik";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<FormHandling />
	</React.StrictMode>
);
