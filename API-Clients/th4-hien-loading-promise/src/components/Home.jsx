import { useLocation } from "react-router-dom";

function Home() {
    const {
        state: { email, password },
    } = useLocation();
    return (
        <div>
            <h1>Welcome Home</h1>
            <h3>{email}</h3>
            <p>{password}</p>
        </div>
    );
}

export default Home;
