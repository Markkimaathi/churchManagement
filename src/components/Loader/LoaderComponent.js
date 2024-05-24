import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import "./Loader.css";

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <BallTriangle
        height={100}
        width={500}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default LoaderComponent;
