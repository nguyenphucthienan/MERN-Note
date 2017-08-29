import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Landing from './Landing';
import RequireAuth from './auth/requireAuth';
import Dashboard from './Dashboard';
import NoteNew from './notes/NoteNew';
import NoteView from './notes/NoteView';
import NoteEdit from './notes/NoteEdit';
import NotFound from './NotFound';

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
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/notes" component={RequireAuth(Dashboard)} />
                <Route exact path="/notes/new" component={RequireAuth(NoteNew)} />
                <Route exact path="/notes/:id/edit" component={RequireAuth(NoteEdit)} />
                <Route exact path="/notes/:id" component={NoteView} />
                <Route exact path="/404" component={NotFound} />
                <Route path="*" component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
