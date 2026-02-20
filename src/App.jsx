import MainPage from './MainPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OrderPage from './OrderPage';
import { useState } from 'react';
import { initialState } from './initialState';
import Success from './Success';

function App() {

  const [formState, setFormState] = useState(initialState)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <MainPage />
          </Route>
          <Route path="/siparis">
            <OrderPage state={formState} setState={setFormState} />
          </Route>
          <Route path="/success">
            <Success state={formState}/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
