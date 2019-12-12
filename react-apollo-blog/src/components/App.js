import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Mapbox from './Mapbox';
import Here from "./Here";
import Leaflet from "./Leaflet";
import GoogleMap from "./GoogleMap";

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/Mapbox/:slug" component={Mapbox} />
        <Route exact path="/Here/:slug" component={Here} />
        <Route exact path="/Leaflet/:slug" component={Leaflet} />
        <Route exact path="/Google/:slug" component={GoogleMap} />
      </main>
    </div>
  </Router>
);

export default App;