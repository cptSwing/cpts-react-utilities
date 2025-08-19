import { createContext } from 'react';

export const getChildSizeContextDefaultValue = { width: 0, height: 0 };
export const GetChildSizeContext = createContext<{ width: number; height: number }>(getChildSizeContextDefaultValue);
