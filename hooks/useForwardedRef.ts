import { ForwardedRef, RefObject, useEffect, useRef } from 'react';

/* https://stackoverflow.com/a/73046577 
When a child component receives a ForwardedRef, it is often to expose the ref to a parent. However, sometimes the child component may need to use the ref itself. In this case, you can use a hook to the reconcile each of the ForwardedRef types listed above.

*/

const useForwardedRef = <T>(ref: ForwardedRef<T>, callback?: (elem: T | null) => void): RefObject<T | null> => {
    const innerRef = useRef<T | null>(null);

    useEffect(() => {
        if (!ref) return;

        if (typeof ref === 'function') {
            ref(innerRef.current);
        } else {
            ref.current = innerRef.current;
        }

        if (callback) callback(innerRef.current);
    }, [ref, callback]);

    return innerRef;
};

export default useForwardedRef;
