import { useState } from 'react'
import MainPage from './MainPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Order from './OrderPage/Order';

function App() {

  

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <MainPage />
          </Route>
          <Route path="/siparis">
            <Order />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
