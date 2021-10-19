import { setHeroesError, setCharacters, setIsLoading as setIsHeroesLoading } from './actions/search';
import { Action } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleRequest } from './api/requestHandler';
import { setComics, setComicsError, setIsLoading as setIsComicsLoading  } from './actions/comics';

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
    yield put(setCharacters(heroes));
  } catch (e) {
    yield put(setHeroesError());
  } finally {
    yield put(setIsHeroesLoading(false))
  }
}

function* fetchComics(action: { payload: string }): any {
  try {
    yield put(setIsComicsLoading(true));
    const comics = yield call(<any>handleRequest, `characters/${action.payload}/comics`);
    yield put(setComics(comics));
  } catch (e) {
    yield put(setComicsError());
  } finally {
    yield put(setIsComicsLoading(false))
  }
}

function* marvelSaga(): any {
  yield takeLatest<TaskAction>('search/getHeroes', fetchHeroes);
  yield takeLatest<TaskAction>('comics/getComics', fetchComics);
}

export default marvelSaga;
