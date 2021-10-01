import { combineReducers } from "redux";
import { comics, IComicsReduxState } from "./comicsReducer";
import { ISearchReduxState, search } from "./searchReducer";

export interface IRootStore {
    comics: IComicsReduxState;
    search: ISearchReduxState;
}

const marvelAppState = combineReducers({
    search,
    comics
});

export default marvelAppState;