import { setHeroesError, setCharacters } from './actions/search';
import { Action } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects'
import { handleRequest } from "./api/requestHandler";
import { setComics, setComicsError } from './actions/comics';

interface ITask {
    payload: string;
}

interface TaskAction extends Action, ITask {type: "TASK_ADD" }


function* fetchHeroes (action: { payload: string; }): any {
    try {
        const heroes = yield call(<any>handleRequest, `characters`, action.payload);
        yield put(setCharacters(heroes));
    } catch (e) {
        yield put(setHeroesError());
    }
}

function* fetchComics (action: { payload: string; }): any {
    try {
        const comics = yield call(<any>handleRequest, `characters/${action.payload}/comics`);
        yield put(setComics(comics));
    } catch (e) {
        yield put(setComicsError());
    }
}

function* marvelSaga(): any {
    yield takeLatest<TaskAction>("search/getHeroes", fetchHeroes);
    yield takeLatest<TaskAction>("comics/getComics", fetchComics);
}

export default marvelSaga;