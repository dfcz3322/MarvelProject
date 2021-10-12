import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMarvelEntityResponse } from '../interface/interface';
import { ComicsItem } from '../components/comicsComics/comicsItem';
import { ComicsLogo } from '../components/comicsLogo/comicsLogo';
import './comics.css';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';
import { handleRequest } from '../api/requestHandler';
import { IRootStore } from '../reducer';
import { Dispatch } from 'redux';
import { setComics } from '../actions/comics';
import { connect } from 'react-redux';

interface IComicsState {
  isLoading: boolean;
}

interface IComicsProps extends RouteComponentProps<MatchParams> {
  comics: IMarvelEntityResponse[];
  isLoading: boolean;
  setComics: (comics: IMarvelEntityResponse[]) => void;
}

interface MatchParams {
  id: string;
}

class Comics extends React.Component<IComicsProps, IComicsState> {
  constructor(props: IComicsProps) {
    super(props);
    this.state = { isLoading: false };
  }

  getComics(): void {
    this.setState({ isLoading: true });
    handleRequest(`characters/${this.props.match?.params.id}/comics`)
      .then((response) => {
        this.props.setComics(response);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentDidMount(): void {
    this.getComics();
  }
  render(): JSX.Element {
    return (
      <div>
        {this.state.isLoading ? <LoadingOverlay></LoadingOverlay> : null}
        <div className="comics-container">
          <ComicsLogo></ComicsLogo>
        </div>

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
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setComics: (comics: IMarvelEntityResponse[]) => dispatch(setComics(comics)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
