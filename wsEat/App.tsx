import React from 'react';
import Root from './src/routes/Root/Root';
import {NativeBaseProvider} from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  );
};

export default App;
