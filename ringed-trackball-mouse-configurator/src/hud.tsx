import React from 'react';
import ReactDOM from 'react-dom/client';
import TopLabelStrip from './components/TopLabelStrip';
import SkeletonBall from './components/SkeletonBall';
import './App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TopLabelStrip />
    <SkeletonBall />
  </React.StrictMode>
);
