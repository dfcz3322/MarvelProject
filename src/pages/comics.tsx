import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMarvelEntityResponse } from '../interface/interface';
import { ComicsItem } from '../components/comicsComics/comicsItem';
import { ComicsLogo } from '../components/comicsLogo/comicsLogo';
import './comics.css';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';
import { getComics } from '../actions/comics';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';

interface MatchParams {
  id: string;
}

function Comics(props: RouteComponentProps<MatchParams>): JSX.Element {
  const dispatch = useDispatch();
  const comics = useAppSelector((store) => store.comics.comics);
  const hasError = useAppSelector((store) => store.comics.hasError);
  const isLoading = useAppSelector((store) => store.comics.isLoading);
  useEffect(() => {
    dispatch(getComics(props.match?.params.id));
  }, []);
  const errorMessage = "AN ERROR HAS OCCURRED, PLEASE TRY AGAIN LATER";
  return (
    <div>
      {isLoading ? <LoadingOverlay></LoadingOverlay> : null}
      <div className="comics-container">
        <ComicsLogo></ComicsLogo>
      </div>
      {hasError ? <p className="error-message">{errorMessage}</p> : null}
      {comics.map((comics: IMarvelEntityResponse) => {
        return <ComicsItem key={comics.id} comics={comics}></ComicsItem>;
      })}
    </div>
  );
}

export default Comics;
