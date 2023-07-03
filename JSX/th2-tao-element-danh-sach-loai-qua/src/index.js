import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry",
];

root.render(
    <div>
        <h1>List of fruits</h1>
        <ul>
            {fruits.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);
