import React from 'react';
import ReactLiveTime from 'react-live-time';

function MyApp() {
    return <ReactLiveTime showSeconds={"true"} time={Date.now()} />;
}

export default ReactLiveTime;