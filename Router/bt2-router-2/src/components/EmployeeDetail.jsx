import { useLocation } from "react-router-dom";

function EmployeeDetail() {
    const { state } = useLocation();
    return (
        <div>
            <h5>{state.id}</h5>
            <p>{state.name}</p>
            <p>{state.age}</p>
        </div>
    );
}

export default EmployeeDetail;
