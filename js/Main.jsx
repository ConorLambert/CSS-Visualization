import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Canvas from './Canvas';
import BoxModel from './Tutorials/BoxModel';

const FourOhFour = () => <h1>404</h1>;

const Main = () => (
    <div className="app">
      <Switch>
        <Route exact path='/' render={() => ( <Canvas model={BoxModel} /> )} />
        <Route path='/BoxModel' render={() => ( <Canvas model={BoxModel} /> )} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );

export default Main;