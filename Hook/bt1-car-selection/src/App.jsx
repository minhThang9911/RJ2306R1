import React, { useState } from "react";
function App(props) {
    const [selectedCar, setSelectedCar] = useState({
        car: "volvo",
        color: "black",
    });
    const handleChange = (e) => {
        setSelectedCar((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div>
            <h1>Select you car</h1>
            <div>
                <label htmlFor="cars">Choose a car:</label>
                <select
                    name="car"
                    id="cars"
                    onChange={handleChange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div>
                <label htmlFor="colors">Choose a car:</label>
                <select
                    name="color"
                    id="colors"
                    onChange={handleChange}>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
            <div>
                <h3 style={{ color: selectedCar.color }}>
                    You selected a{" "}
                    <span style={{ textTransform: "capitalize" }}>
                        {selectedCar.color} - {selectedCar.car}
                    </span>
                </h3>
            </div>
        </div>
    );
}

export default App;
