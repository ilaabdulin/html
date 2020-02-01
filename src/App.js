import React from 'react';

import {Navbar} from './components/Navbar'
import {Alert} from './components/Alert'
import {Form} from './components/Form'
import {Main} from './components/Main'
import {AlertState} from './context/alertContext/alertState'
import {FirebaseState} from './context/firebase/firebaseState'
import {Home} from './components/Home'




function App() {
  return (
      <FirebaseState>
        <AlertState>
          <div className='main'>
            <Navbar/>
            <Home/>
          </div>
        </AlertState>
      </FirebaseState>
  );
}

export default App;
