import { createRef, DependencyList, RefObject, useCallback, useMemo, useRef } from 'react';

/** Returns memoized array of Refs of type T */
export const useCreateRefArray = <T>(count: number, deps: DependencyList = []): RefObject<T>[] =>
    useMemo(() => Array.from({ length: count }).map(() => createRef<T>()), deps);

/** Creates reference to an Array<T>, and returns ref callbacks to set a ref element to Array[index] */
export const useArrayRef = <T>(): [RefObject<T[]>, (index: number) => (elem: T | null) => void] => {
    const array_Ref = useRef<T[]>([]);

    const createRef = useCallback(
        (index: number) => (elem: T | null) => {
            if (elem) {
                array_Ref.current[index] = elem;
            }
        },
        []
    );

    return [array_Ref, createRef];
};

/** TODO hook to use specific keys: https://stackoverflow.com/a/68509263 */
