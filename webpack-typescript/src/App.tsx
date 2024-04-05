import React from 'react';
import './styles.css';
import IMAGE from './animation.jpeg';
import IMAGE2 from './admin.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
    const num=0
  return (
    <>   
     <h1>React Typescript Webpack - {process.env.NODE_ENV} {process.env.name}</h1>
     <img src={IMAGE} alt="animation" width="300" height="200" />
     <img src={IMAGE2} alt="admin" width="300" height="200" />
    <ClickCounter />
    </>
  )
}
