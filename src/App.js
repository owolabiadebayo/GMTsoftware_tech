import React, { useEffect } from 'react'
import './App.css'
import Home from './components/pages/HomePage/Home'
import Success from './components/pages/Courses/success'
import Failure from './components/pages/Courses/failure'
import Curriculum from './components/pages/Curriculum/Curriculum'
import SignUp from './components/pages/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer.js/Footer'
import Webdev from './components/pages/Webdev/Webdev'
import UXdesigner from './components/pages/Courses/UX designer'
import About from './components/pages/About/About'
import FrontEnd from './components/pages/Courses/FrontEnd'
import Fullstack from './components/pages/Courses/Fullstack'
import Python from './components/pages/Courses/Python'
import React1 from './components/pages/Courses/React'
import Flutter from './components/pages/Courses/Flutter'
import Companies from './components/pages/Courses/Companies'

function App() {
  const tawkTo = require('tawkto-react')

  const tawkToPropertyId = '600c6f31c31c9117cb71bfc3'

  useEffect(() => {
    tawkTo(tawkToPropertyId)
  })

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" component={Success} />
          <Route path="/failure" component={Failure} />
          <Route path="/Fullstack" component={Fullstack} />
          <Route path="/Python" component={Python} />
          <Route path="/FrontEnd" component={FrontEnd} />
          <Route path="/React" component={React1} />
          <Route path="/flutter" component={Flutter} />
          <Route path="/curriculum" component={Curriculum} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/web-dev" component={Webdev} />
          <Route path="/UXdesigner" component={UXdesigner} />
          <Route path="/About-Us" component={About} />
          <Route path="/Companies" component={Companies} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App
