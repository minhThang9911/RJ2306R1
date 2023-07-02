import { useState } from "react";
function useIncrement(addAmount) {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount((pre) => pre + addAmount);
    };
    return [count, increase];
}
export default useIncrement;
