import React, { useEffect, useState } from "react";

const Counter = ({ target, label, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return; // don’t start until visible

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 20);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                clearInterval(counter);
                setCount(target);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(counter);
    }, [target, isVisible]);

    return (
        <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">{count}+</h3>
            <p className="text-gray-300 text-sm md:text-base">{label}</p>
        </div>
    );
};

export default Counter;
