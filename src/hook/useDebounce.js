import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounceValue, setUseDebounceValue] = useState(value);

    useEffect(() => {
        const hanlde = setTimeout(() => {
            setUseDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(hanlde);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return useDebounceValue;
}

export default useDebounce;
