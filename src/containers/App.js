import React, { Component } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'
import AppBar from '../components/AppBar'
import { getConstraints } from '../ducks/constraints'
import { updateForm } from '../ducks/form'
import { getOffer } from '../ducks/offer'
import Form from '../components/Form'
import Offer from '../components/Offer'

class App extends Component {
  componentDidMount() {
    this.props.getConstraints();
  }

  render() {
    const { loading, isLoadingConstraints, isLoadingOffer, constraints, offer, updateForm, form} = this.props;

    return (
      <div>
        <AppBar loading={loading} />
        <div style={{'width': 600, padding: 32}}>
          {isLoadingConstraints && <p>Loading constraints</p>}
          {!isLoadingConstraints && constraints.toJSON &&
            <Form constraints={constraints.toJSON()} updateForm={updateForm} values={form} />
          }

          {isLoadingOffer && <p>Loading offer</p>}
          {offer.toJSON &&
            <Offer {...offer.toJSON()} />
          }
        </div>
      </div> )
  }
}

export default connect(
  state => ({
    isLoadingConstraints: state.constraints.isLoading,
    isLoadingOffer: state.offer.isLoading,
    loading: state.loading,
    constraints: state.constraints.data,
    offer: state.offer.data,
    form: state.form
  }),
  dispatch => ({
    getConstraints: () => dispatch(getConstraints()),
    updateForm: (values) =>  {
      dispatch(updateForm(values));
      dispatch(getOffer())
    }
  }))(App)
