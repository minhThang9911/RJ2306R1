import { useState, useEffect } from "react";
function Timer() {
    const [count, setCount] = useState(10);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((pre) => {
                if (pre > 0) return pre - 1;
                else {
                    clearInterval(intervalId);
                    alert("Time's Out");
                    return pre;
                }
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return <h2>Count down from {count}</h2>;
}

export default Timer;
