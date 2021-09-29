import React from 'react'
import HomeP from './HomeP'
import AboutP from './AboutP'
import ServicesP from './ServicesP'
import TrainerP from './TrainerP'
import ContactP from './ContactP'
import ErrorP from './ErrorP'
import { Route , Switch } from 'react-router-dom'
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomeP}/>
        <Route path='/service' component={ServicesP}/>
        <Route path='/about' component={AboutP}/>
        <Route path='/trainer' component={TrainerP}/>
        <Route path='/contact' component={ContactP}/>
        <Route path="*" component={ErrorP}/>
      </Switch>
    </>
  )
}

export default App
