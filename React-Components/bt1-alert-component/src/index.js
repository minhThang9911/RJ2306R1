import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function Alert({ text }) {
    return (
        <div
            className="alert alert-warning"
            role="alert">
            {text}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(Alert);
root.render(
    <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
);
