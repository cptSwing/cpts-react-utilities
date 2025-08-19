import { useEffect, useRef, useState } from 'react';

// --> https://hooks-guide.netlify.app/community/useThrottle as react-use's implementation does not work with react 18 (yet?)
const useThrottle = (value: number, limit: number) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastRan = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(
            function () {
                if (Date.now() - lastRan.current >= limit) {
                    setThrottledValue(value);
                    lastRan.current = Date.now();
                }
            },
            limit - (Date.now() - lastRan.current)
        );

        return () => {
            clearTimeout(handler);
        };
    }, [value, limit]);

    return throttledValue;
};

export default useThrottle;
