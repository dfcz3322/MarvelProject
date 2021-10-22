import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMarvelEntityResponse } from '../interface/interface';
import { ComicsItem } from '../components/comicsComics/comicsItem';
import { ComicsLogo } from '../components/comicsLogo/comicsLogo';
import './comics.css';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';
import { IRootStore } from '../reducer';
import { Dispatch } from 'redux';
import { getComics, setComics } from '../actions/comics';
import { connect } from 'react-redux';


interface IComicsProps extends RouteComponentProps<MatchParams> {
  comics: IMarvelEntityResponse[];
  isLoading: boolean;
  setComics: (comics: IMarvelEntityResponse[]) => void;
  getComics: (id: string) => void;
  hasError: boolean;
}

interface MatchParams {
  id: string;
}

class Comics extends React.Component<IComicsProps> {

  componentDidMount(): void {
    this.props.getComics(this.props.match?.params.id);
  }
  render(): JSX.Element {
    return (
      <div>
        {this.props.isLoading ? <LoadingOverlay></LoadingOverlay> : null}
        <div className="comics-container">
          <ComicsLogo></ComicsLogo>
        </div>
        {this.props.hasError ? <p className="error-message">AN ERROR HAS OCCURRED, PLEASE TRY AGAIN LATER</p> : null}
        {this.props.comics.map((comics: IMarvelEntityResponse) => {
          return <ComicsItem key={comics.id} comics={comics}></ComicsItem>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (store: IRootStore) => {
  return {
    comics: store.comics.comics,
    hasError: store.comics.hasError,
    isLoading: store.comics.isLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getComics: (id: string) => dispatch(getComics(id)),
    setComics: (comics: IMarvelEntityResponse[]) => dispatch(setComics(comics)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
