import React from 'react'
import './App.css';
import Main from "./Stranky/Main";
import PridejMaterial from "./Stranky/PridejMaterial";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Menu from "./Komponenty/Menu";
import { GlobalProvider } from "./Kontex/GlobKon/GlobalKontex"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/pridej-matros" component={PridejMaterial}/>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

