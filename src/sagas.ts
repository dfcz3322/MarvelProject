import { getCharactersError, getCharactersSuccess, setIsLoading as setIsHeroesLoading, GET_CHARACTERS } from './actions/search';
import { Action } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleRequest } from './api/requestHandler';
import { GET_COMICS, setComics, setComicsError, setIsLoading as setIsComicsLoading  } from './actions/comics';

interface ITask {
  payload: string;
}

interface TaskAction extends Action, ITask {
  type: 'TASK_ADD';
}

function* fetchHeroes(action: { payload: string }): any {
  try {
    yield put(setIsHeroesLoading(true));
    const heroes = yield call(<any>handleRequest, `characters`, action.payload);
    yield put(getCharactersSuccess(heroes));
  } catch (e) {
    yield put(getCharactersError());
  } finally {
    yield put(setIsHeroesLoading(false))
  }
}

function* fetchComics(action: { payload: string }): any {
  try {
    yield put(setIsComicsLoading());
    const comics = yield call(<any>handleRequest, `characters/${action.payload}/comics`);
    yield put(setComics(comics));
  } catch (e) {
    yield put(setComicsError());
  } 
  }

function* marvelSaga(): any {
  yield takeLatest<TaskAction>(GET_CHARACTERS, fetchHeroes);
  yield takeLatest<TaskAction>(GET_COMICS, fetchComics);
}

export default marvelSaga;
