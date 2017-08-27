import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Landing from './Landing';
import Dashboard from './Dashboard';
import NoteNew from './notes/NoteNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="background-image flex-wrapper">
            <Header />
            <main>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/notes" component={Dashboard} />
              <Route exact path="/notes/new" component={NoteNew} />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
