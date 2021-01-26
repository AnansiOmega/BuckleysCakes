import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components/navbar'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact'

const App = () => {
useEffect(() => {
  document.body.style.backgroundColor = '#f3a4b5'
  return () => document.body.style.backgroundColor = 'white'
})

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
