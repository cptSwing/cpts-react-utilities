/** From https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/#usesearchparamsstate-hook */

import { useSearchParams } from 'react-router-dom';

/** **`useSearchParamsState`** takes two parameters:

    - **`searchParamName`**: the name of the query string parameter where state is persisted
    - **`defaultValue`**: the fallback value if there’s no value in the query string

    If `searchParamName` is provided, returns a `searchParam` value derived from the `searchParamName` search parameter,
    and also returns a `setSearchParam` function, which allows us to set the `searchParam` value.

    __If no args are supplied__, a Record of `key: value` pairs of existing `searchParam`'s is returned. 
 */
const useSearchParamsState = (searchParamName: string, defaultValue: string, replace = true) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const acquiredSearchParam = searchParams.get(searchParamName);

    const searchParamsState = acquiredSearchParam ?? defaultValue;

    const setSearchParamsState = (newState: string) => {
        const next = Object.assign(
            {},
            [...searchParams.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
            { [searchParamName]: newState }
        );

        setSearchParams(next, { replace }); // At least in our case. "Silently" update the query string without pushing each modification to history stack

        // setSearchParams(
        //     (searchParams) => ({
        //         ...searchParams, [searchParamName]: newState;
        //     }),
        //     { replace }
        // );
    };

    return [searchParamsState, setSearchParamsState] as [string, (newState: string) => void];
};

export default useSearchParamsState;

export const useGetAllSearchParams = () => {
    const [searchParams] = useSearchParams();

    return Object.fromEntries([...searchParams]);
};
