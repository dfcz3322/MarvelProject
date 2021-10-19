import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './loadingOverlay.css';

export const LoadingOverlay = (): JSX.Element => {
  return (
    <div className="loadingOverlay">
      <CircularProgress color="secondary" className="loadingOverlay--spinner" />;
    </div>
  );
};
