import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Landing from './Landing';
import RequireAuth from './auth/requireAuth';
import Dashboard from './Dashboard';
import NoteAdd from './notes/NoteAdd';
import NoteEdit from './notes/NoteEdit';
import NoteView from './notes/NoteView';
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
                <Route exact path="/notes/new" component={RequireAuth(NoteAdd)} />
                <Route exact path="/notes/:id/edit" component={RequireAuth(NoteEdit)} />
                <Route exact path="/notes/:id" component={NoteView} />
                <Route exact path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
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
