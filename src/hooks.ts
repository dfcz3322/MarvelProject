import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootStore } from "./reducer";

export const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector;