// import { useDispatch, useSelector } from 'react-redux';

// export const useTypedDispatch = () => useDispatch();
// export const useTypedSelector = useSelector;

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
