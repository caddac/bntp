import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Seq } from 'immutable';

import Bookmarks from './Bookmarks';
import Apps from './Apps';
import TopSites from './TopSites';
import Preferences from '../components/Preferences';

import { Visibilities } from '../models';

class App extends React.Component {
  static propTypes = {
    visibilities: PropTypes.instanceOf(Visibilities).isRequired,
  }

  render() {
    const { visibilities } = this.props;
    return (
      <div>
        {visibilities.isVisible('top-sites') ? <TopSites/> : null}
        {visibilities.isVisible('bookmarks') ? <Bookmarks/> : null}
        {visibilities.isVisible('apps') ? <Apps/> : null}
        <Preferences />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visibilities: state.visibilities,
});

export default connect(mapStateToProps)(App);