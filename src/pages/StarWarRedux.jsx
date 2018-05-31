import React, { Component } from "react";
import { connect } from 'react-redux'
import { selectors, operations } from 'state/ducks/starwar'

import StarWarPlanetView from "components/StarWarPlanet"

class StarWarRedux extends Component {

  componentDidMount() {
    this.props.fetchResults()
  }

  render() {
    return (
      <div>
          <StarWarPlanetView {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      loading: selectors.getLoading(state),
      error: selectors.getError(state),
      data: selectors.getData(state)
  }
}

const mapDispatchToProps = {
  fetchResults: operations.fetchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarRedux)
