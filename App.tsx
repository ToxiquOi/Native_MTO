import React, {Fragment} from 'react';
import AppContainer from './navigator/AppContainer'
import { StatusBar } from 'react-native'

export default function App() {
  return (
      <Fragment>
          <StatusBar hidden={true}/>
          <AppContainer/>
      </Fragment>
  );
}
